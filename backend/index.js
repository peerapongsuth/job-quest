var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/myappdatabase');

var Trips = require('./app/models/trips');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;     

var router = express.Router(); 

//TODO
router.route('/trips')
    .post(function(req, res) {
        var trips = new Trips();    
        trips.name = req.body.name; 
        trips.price = req.body.price;
        trips.description = req.body.description;
        trips.save(function(err) {
            if (err)res.send(err);
            res.json({ message: 'Trips created!' });
        });
    })
    .get(function(req, res) {
        Trips.find(function(err, trips) {
            if (err)res.send(err);
            res.json(trips);
        });
    });;

router.route('/Trips/:trip_id')
    .get(function(req, res) {
        Trips.findById(req.params.trip_id, function(err, trips) {
            if (err)res.send(err);
            res.json(trips);
        });
    }) 
    .put(function(req, res) {
        Trips.findById(req.params.trip_id, function(err, trips) {
            if (err) res.send(err);
            trips.name = req.body.name; 
            trips.description = req.body.description;
            trips.price = req.body.price;
            trips.save(function(err) {
                if (err)res.send(err);
                res.json({ message: 'Updated!' });
            });
        });
    })
    .delete(function(req, res) {
        Trips.remove({
            _id: req.params.trip_id
        }, function(err, trips) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
    });;;

app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('port ' + port);