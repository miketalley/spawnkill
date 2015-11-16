module.exports = {
  calculateDamage: function(attacker, defender){
    var min = attacker.weapon && attacker.weapon.minimumDamage || 0,
      max = attacker.weapon && attacker.weapon.maximumDamage || 0;

    // TODO -- add calculation based on elements

    return Math.random() * (max - min) + min;
  }
};
