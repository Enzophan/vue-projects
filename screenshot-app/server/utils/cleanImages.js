const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');

module.exports = function () {
    var uploadsDir = './public/screenshots';

    setInterval(() => {
        console.log("Run clean image screenshot")
        fs.readdir(uploadsDir, function (err, files) {
            console.log("err ", err)
            console.log("uploadsDir ", files)
            if (files.length > 0) {
                files.forEach(function (file, index) {
                    fs.stat(path.join(uploadsDir, file), function (err, stat) {
                        var endTime, now;
                        if (err) {
                            return console.error(err);
                        }
                        now = new Date().getTime();
                        endTime = new Date(stat.ctime).getTime() + 60000;
                        if (now > endTime) {
                            return rimraf(path.join(uploadsDir, file), function (err) {
                                if (err) {
                                    return console.error(err);
                                }
                                console.log('successfully deleted');
                            });
                        }
                    });
                });
            }
            return;
        })
    }, 60000);
}