try {
      doesNotExist;
} catch(err) {
      err.arguments[0] === 'doesNotExist';
      console.log(err.arguments[0]);
}
