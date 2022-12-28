async function main() {
    const Indigo = await ethers.getContractFactory("Indigo")
  
    // Start deployment, returning a promise that resolves to a contract object
    const indigo = await Indigo.deploy("Codename Indigo", "CINDT")
    await indigo.deployed();
    console.log("Contract deployed to address:", indigo.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  