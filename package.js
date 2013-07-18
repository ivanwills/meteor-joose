Package.describe({
    summary: "Add all the joose dependancies that I want"
});

Package.on_use(function(api) {
    api.add_files('joose.js', ['server', 'client']);
});

//Npm.depends({
//    'joose' : '3.50.0'
//});
//
//Npm.require('joose');
