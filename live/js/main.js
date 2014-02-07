var robot = {
  name:null,
  rank:null,
  head:null,
  torso:null,
  legs:null,
  setName:function(newName){
    this.name = newName + ' the Robot';
  },
  setRank:function(longRank){
    longRank = longRank.toLowerCase();
    switch(longRank){
      case 'liutenant':
        this.rank = 'LT';
        break;
      case 'captain':
        this.rank = 'CPT';
        break;
      case 'major':
        this.rank = 'MAJ';
        break;
      case 'liutenant colonel':
        this.rank = 'LTC';
        break;
      case 'colonel':
        this.rank = 'COL';
        break;
      case 'general':
        this.rank = 'GEN';
        break;
    }
  },
  nameAndRank:function(){
    return this.rank + " " + this.name;
  },
  isRecruitable:function(){
    return this.head !== null && this.name !== null && this.rank !== null && this.torso !== null && this.legs !== null;
  }
};

var headPicker = {
  heads:['square', 'triangle', 'round', 'trapizoid'],
  choose:function(i){
    return this.heads[i];
  }
};