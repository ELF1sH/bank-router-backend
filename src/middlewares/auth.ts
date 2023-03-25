const auth = (req: any, res: any, next: any) => {
  // res.status(401).send('Error');
  const accessToken = req.headers['authorization'];

  // TODO: need to be passed into authorization service
  // TODO: verify that token exists in db and that it hasn't expired
  console.log(accessToken);

  next();
}

export default auth;
