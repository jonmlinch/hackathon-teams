var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { team: teams });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

router.get('/edit/:name', function(req, res) {
  console.log('im trying to edit')
  var team = teamService.getTeam(req.params.name);
  res.render('teams/edit', {team: team});
});

router.put('/:name', function(req, res){
	console.log(req.body);
	teamService.editTeam(req.params.name, req.body)
	res.send('success');
})

router.delete('/:name', function(req, res){
	console.log(req.params)
	console.log(req.body)
	teamService.deleteTeam(req.params.name);
	console.log('Im deleting stuff');
	res.send("deleted!")
})

module.exports = router;
