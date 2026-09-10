const poll = new Map();
//function to add an option to be voted on
const addOption=(option)=>{
  if (!option){
    return "Option cannot be empty."
  }else if (!poll.has(option)){
    poll.set(option,new Set());
    return `Option "${option}" added to the poll.`;
  }else {
    return `Option "${option}" already exists.`;
  }
};
//function for user to vote
const vote = (option,voterId) =>{
  if (!poll.has(option)){
    return `Option "${option}" does not exist.`;
  }else {
    if (poll.get(option).has(voterId)){
      return `Voter ${voterId} has already voted for "${option}".`;
    }else {
      poll.get(option).add(voterId);
      return `Voter ${voterId} voted for "${option}".`
    }
  }
};
const displayResults = () => {
  let result = "Poll Results:";
  poll.forEach((voterSet, option) => {
    result += `\n${option}: ${voterSet.size} votes`;
  });
  return result;
};
addOption("France");
addOption("Canada");
addOption("China");
vote("France",4232);
vote("France",2123);
vote("Canada",2312);
displayResults();