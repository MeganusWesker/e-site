// create and send token and save in cookie.

const sendToken = (user,statusCode,res)=>{
    //create jwt token

    const token = user.getJWTToken();

    // Options for cokie

    const options = {
        expires:new Date(
            Date.now() + process.env.COOKIE_EXPRIE_TIME * 24 * 60 * 60 *1000
        ),
        httpOnly:true
    }

    res.status(statusCode).cookie('token',token,options).json({
          success:true,
          token,
          user
    });
}

module.exports = sendToken;