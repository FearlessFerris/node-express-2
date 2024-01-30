Bug 1 

    This is a bug due to the fact that the given function authUser() does not verify the
    validity of the token before then decoding the token to display the contents inside. 

    Correction:
    function authUser( req, res, next ){
        try{
            const token = req.body._token || req.query._token;
        if( token ){
            const payload = jwt.verify( token, SECRET_KEY );
            req.curr_username = payload.username;
            req.curr_admin = payload.admin;
        }
        }
        catch( error ){
        error.status = 401;
        return next( error );
        }
    }

    The function will now verify if the token and signature are correct and return requested user if true.

Bug 2

    This bug is due to a method on the user class where there is a static method used to getAll() users
    inside of a given database. However, the method takes two parameters but does not use either inside of the response. Also this function should be ran with try and catch blocks as the await db.query 
    may or may not return a promise and this will allow proper error handling of such cases. 

    Correction:
    static async getAll() {
        try{

    const result = await db.query(
          `SELECT username,
                first_name,
                last_name,
                email,
                phone
            FROM users 
            ORDER BY username`
        );
        return result.rows;
        }
        catch( error ){
            throw error;
        }
  }

Bug 3 

    This bug is due to the fact that there is a route allowing a user to login that is not awaiting 
    the User.authenticate() method, this is an asynchronous method and needs to be handled as such 
    with the use of the await keyword. 

    Correction:
    router.post('/login', async function(req, res, next) {
        try {
            const { username, password } = req.body;
            let user = await User.authenticate(username, password);
            const token = createTokenForUser(username, user.admin);
            return res.json({ token });
    } catch (err) {
        return next(err);
    }
    }); // end


Bug 4

    This is a smaller bug but could lead to potentially unexpected outcomes, inside of the user 
    model file the get() method is not properly throwing an error in case of an invalid user entry, 
    needs to add the 'throw' keyword in front of the new ExpressError in order to actually throw an 
    error.

    Correction:
    static async get(username) {
    const result = await db.query(
      `SELECT username,
                first_name,
                last_name,
                email,
                phone
         FROM users
         WHERE username = $1`,
      [username]
    );

    const user = result.rows[0];

    if (!user) {
      throw new ExpressError('No such user', 404);
    }

    return user;
  }

Bug 5

    


    