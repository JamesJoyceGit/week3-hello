const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("TestHello", function () {
    describe("Deployment", function () {
        async function deployTokenFixture() {
            const Hello = await ethers.getContractFactory("Hello");
            const hello = await Hello.deploy();

            await hello.deployed();

            return hello;
        }

        it("Should say hello", async function() {
            const hello = await loadFixture(deployTokenFixture);

            // Because most ERC20 contracts use 18 decimal places, we expect the totalSupply()
            // function to return 100000000000000000000, which is comparable to 100.000000000000000000
            // if we operated with floating point numbers. But to ensure accuracy, we store token
            // amounts using integers, instead relying on fixed-point representation.
            expect(await hello.sayHelloWorld()).to.be.equal("Hello World");
        });

        it("Should work", async function() {
            const hello = await loadFixture(deployTokenFixture);

            // Because most ERC20 contracts use 18 decimal places, we expect the totalSupply()
            // function to return 100000000000000000000, which is comparable to 100.000000000000000000
            // if we operated with floating point numbers. But to ensure accuracy, we store token
            // amounts using integers, instead relying on fixed-point representation.
            expect(await hello.change("Hi"));

            expect(await hello.call()).to.be.equal("Hi");
        });
    });
});