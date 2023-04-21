/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/


const TKNS = []

function mintNFT (name, eyeColor, shirtType, accessories) {
    const NFT = { 
        "name":  name,
        "eyecolor": eyeColor,
        "shirtType": shirtType,
        "accessories": accessories
    }
    TKNS.push (NFT);
    console.log ("Minted: " + name);
}


function listTKNS() {
    for (let i = 0; i < TKNS.length; i++) {
        console.log("\nID \t\t\t\t" + (i + i));
        console.log("\nName: \t\t\t" + TKNS[i].name);
        console.log("Eye Color: \t\t" + TKNS[i].eyecolor);
        console.log("Shirt Type: \t" + TKNS[i].shirtType);
        console.log("Accessories: \t" + TKNS[i].accessories);
    }

}


function getTotalSupply () {
    console.log("\nTotal Number Of NFTs Minted: " + TKNS.length)

}

mintNFT ("Jake", "Blue", "Tank Top", "Gold Chains");
mintNFT ("Caleb", "Black", "Shirt", "Wrist Watch");
mintNFT ("Eldryn", "Gray", "Suit", "Bracelet");
mintNFT ("Arquin", "White", "Sweatshirt", "Ring");
mintNFT ("Edgar", "Red", "Polo", "Necklace");
listTKNS ();
getTotalSupply