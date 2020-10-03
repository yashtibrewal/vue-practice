new Vue({
  el: "#app",
  data: {
    isStarted: false,
    player_health: 100,
    monster_health: 100,
    factor: 20,
    min_health: 0,
    logs: [],
  },
  computed: {
    hasLogs: function () {
      return this.logs.length > 0 ? true : false;
    },
    player_won: function () {
      if (this.monster_health < 0) {
        return true;
      } else {
        return false;
      }
    },
    monster_won: function () {
      if (this.player_health < 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    cleanLogs: function () {
      this.logs = [];
    },
    initHealth: function () {
      this.player_health = 100;
      this.monster_health = 100;
    },
    logAttack: function (isCallerMonster, damage) {
      if (isCallerMonster) {
        this.logs.unshift("Monster Attack Player by " + damage);
      } else {
        this.logs.unshift("Player Attack Monster by " + damage);
      }
    },
    logHeal: function (heal) {
      this.logs.unshift("Player heals by " + heal);
    },
    anyPlayerWon: function () {
      if (this.player_won || this.monster_won) {
        return true;
      } else {
        return false;
      }
    },
    getPlayerBarWidth: function (value) {
      return "width:" + value + "%;";
    },
    checkHealth: function () {
      if (this.player_won) {
        this.isStarted = false;
      } else if (this.monster_won) {
        this.isStarted = false;
      }
    },
    getRandomValue: function () {
      return Math.round(Math.random() * this.factor);
    },
    startGame: function () {
      this.isStarted = true;
      this.initHealth();
      this.cleanLogs();
    },
    attack: function (event, special = false) {
      let damage = this.getRandomValue();
      if (special) {
        damage = damage * 2;
      }
      this.logAttack(false, damage);
      this.monster_health -= damage;
      this.checkHealth();
      if (this.anyPlayerWon()) {
        return;
      }
      this.monsterAttack();
      this.checkHealth();
    },
    heal: function () {
      let heal = 0;
      if (this.player_health < 100) {
        heal = this.getRandomValue();
        this.player_health += heal;
        // handle if player health crosses 100 due to big high healing vaulue
        if (this.player_health > 100) {
          heal = heal - (this.player_health % 100);
          this.player_health = 100;
        }
      }
      this.checkHealth();
      if (this.anyPlayerWon()) {
        return;
      }
      this.logHeal(heal);
      this.monsterAttack();
      this.checkHealth();
    },
    giveUp: function () {
      this.isStarted = false;
    },
    monsterAttack: function () {
      let damage = this.getRandomValue();
      this.logAttack(true, damage);
      this.player_health -= damage;
    },
  },
});
