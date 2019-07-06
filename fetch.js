module.exports = (req, res, next) => {
    if (req.method === 'POST') {
        req.method = "GET"
    }
    if(res.statusCode !== 200){
        res.statusCode = 200
    }
    //console.log(res);
    next()
}
