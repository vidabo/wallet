//Mainnet
//ERC20Generator = 0xDC3A2E74Dfc370E4129d143661D9fDa9D3080537
//LookUpContract = 0x5f0dBeF664d9d6D047FeB500E285492eAe8DE644
//Testnet
//ERC20Generator = 0xDC3A2E74Dfc370E4129d143661D9fDa9D3080537
//LookUpContract = 0x5f0dBeF664d9d6D047FeB500E285492eAe8DE644
//Local
//ERC20Generator = 0x5FbDB2315678afecb367f032d93F642f64180aa3
//LookUpContract = 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

//Testnet
//erc20Generator: 0x8484B28797ac09a04e30Eb50cBE5Fa630372Ff90
//LookUpContract: 0x07ACb02b4d49F7cD0d6d66113C3d1eb415aF4C79
import ERC20Generator from "./ERC20Generator.json";
import LookUpContract from "./LookUpContract.json";

export const ERC20Generator_ABI = ERC20Generator.abi;
export const ERC20Generator_BYTECODE = ERC20Generator.bytecode;
export const ERC20Generator_ADDRESS =
  "0x8484B28797ac09a04e30Eb50cBE5Fa630372Ff90";

export const LookUpContract_ABI = LookUpContract.abi;
export const LookUpContract_ADDRESS =
  "0x07ACb02b4d49F7cD0d6d66113C3d1eb415aF4C79";
