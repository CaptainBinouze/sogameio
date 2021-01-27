module.exports = function (socket) {

    console.log(socket.id + ' a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    /*socket.on('join-show', () => {
        console.log("join  show")
        socket.join('show')
    });*/
};