const auth = (req: any, res: any, next: any) => {
  // res.status(401).send('Error');
  next();
}

export default auth;
