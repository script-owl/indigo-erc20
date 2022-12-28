const { expect } = require("chai");

describe("Token contract", function () {
  it("Ensure correct constructor settings assign the total supply of tokens to the owner", async function () {

    const Token = await ethers.getContractFactory("Indigo");

    const hardhatToken = await Token.deploy("Codename Indigo", "CINDT");
    expect(await hardhatToken.name()).to.equal("Codename Indigo");
  });
});