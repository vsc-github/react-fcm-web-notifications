/**
 * Created by vishwas3 on 23/7/17.
 */

var ghpages = require('gh-pages');

ghpages.publish('build', function(err) {
    if(err) console.log("Github deploy error: ", err);
    else console.log("Deployed successfully!");
});