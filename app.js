let web3;
let accounts;

window.onload = async function () {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        document.getElementById('connectWallet').addEventListener('click', connectWallet);
        document.getElementById('birthForm').addEventListener('submit', mintNFT);
    } else {
        alert('Please install MetaMask to interact with the Ethereum blockchain!');
    }
};

async function connectWallet() {
    try {
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        document.getElementById('walletAddress').innerText = `Connected: ${accounts[0]}`;
    } catch (error) {
        console.error(error);
    }
}

async function mintNFT(event) {
    event.preventDefault();
    const birthDate = document.getElementById('birthDate').value;
    const birthTime = document.getElementById('birthTime').value;

    if (!accounts) {
        alert('Please connect your wallet first!');
        return;
    }

    // Placeholder: You will replace this later with actual smart contract interaction
    alert(`Minting NFT for Birth Date: ${birthDate}, Birth Time: ${birthTime}`);
}
