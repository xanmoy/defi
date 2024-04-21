// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract DEX {
    using SafeMath for uint256;

    address public admin;
    mapping(address => mapping(address => uint256)) public balances;
    mapping(address => mapping(address => uint256)) public orderBook;

    mapping(address => bool) public whitelistedTokens;
    uint256 public feePercentage; // Fee percentage in basis points (0.01% = 1 basis point)
    uint256 public constant BASIS_POINTS_DIVISOR = 10000; // 100%

    event Deposit(address indexed from, address indexed token, uint256 amount);
    event Withdraw(address indexed to, address indexed token, uint256 amount);
    event Swap(address indexed from, address indexed to, address indexed tokenFrom, address tokenTo, uint256 amountFrom, uint256 amountTo);
    event OrderPlaced(address indexed trader, address indexed tokenFrom, address indexed tokenTo, uint256 amountFrom, uint256 amountTo);

    constructor() {
        admin = msg.sender;
        feePercentage = 10; // 0.1% fee by default
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    function deposit(address token, uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        require(IERC20(token).transferFrom(msg.sender, address(this), amount), "Transfer failed");

        balances[msg.sender][token] += amount;
        emit Deposit(msg.sender, token, amount);
    }

    function withdraw(address token, uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        require(balances[msg.sender][token] >= amount, "Insufficient balance");

        balances[msg.sender][token] -= amount;
        require(IERC20(token).transfer(msg.sender, amount), "Transfer failed");

        emit Withdraw(msg.sender, token, amount);
    }

    function swap(address tokenFrom, address tokenTo, uint256 amountFrom) external {
        require(amountFrom > 0, "Amount must be greater than zero");
        require(balances[msg.sender][tokenFrom] >= amountFrom, "Insufficient balance");

        uint256 amountTo = amountFrom; // Simplified for demonstration

        balances[msg.sender][tokenFrom] -= amountFrom;
        balances[msg.sender][tokenTo] += amountTo;

        emit Swap(msg.sender, msg.sender, tokenFrom, tokenTo, amountFrom, amountTo);
    }

    function placeOrder(address tokenFrom, address tokenTo, uint256 amountFrom, uint256 amountTo) external {
        require(amountFrom > 0 && amountTo > 0, "Amount must be greater than zero");
        require(balances[msg.sender][tokenFrom] >= amountFrom, "Insufficient balance");

        orderBook[tokenFrom][tokenTo] += amountFrom;
        balances[msg.sender][tokenFrom] -= amountFrom;

        emit OrderPlaced(msg.sender, tokenFrom, tokenTo, amountFrom, amountTo);
    }

    function executeOrder(address tokenFrom, address tokenTo, uint256 amountFrom, uint256 amountTo) external {
        require(amountFrom > 0 && amountTo > 0, "Amount must be greater than zero");
        require(orderBook[tokenFrom][tokenTo] >= amountFrom, "Insufficient liquidity in order book");

        uint256 fee = amountFrom.mul(feePercentage).div(BASIS_POINTS_DIVISOR);
        uint256 amountToAfterFee = amountTo.sub(fee);

        balances[msg.sender][tokenTo] += amountToAfterFee;
        balances[admin][tokenFrom] += fee;

        orderBook[tokenFrom][tokenTo] -= amountFrom;

        emit Swap(msg.sender, msg.sender, tokenFrom, tokenTo, amountFrom, amountToAfterFee);
    }

    function setFeePercentage(uint256 _feePercentage) external onlyAdmin {
        require(_feePercentage <= BASIS_POINTS_DIVISOR, "Fee percentage must be less than or equal to 10000 (100%)");
        feePercentage = _feePercentage;
    }

    function whitelistToken(address token) external onlyAdmin {
        whitelistedTokens[token] = true;
    }

    function removeTokenFromWhitelist(address token) external onlyAdmin {
        whitelistedTokens[token] = false;
    }
}
