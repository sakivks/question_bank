const router = require('koa-router')();
const fs = require('fs');

router.get('/app', async function(ctx, next) {
  ctx.type = 'html';
  console.log('APP');
  ctx.body = fs.readFileSync('public/index.html', 'utf8');
});

router.get('/', async function(ctx, next) {
  ctx.type = 'html';
  console.log('Login');
  ctx.body = fs.readFileSync('public/home.html', 'utf8');
});

router.get(/(|^$)/, async function(ctx, next) {
  // final route if nothing matches
  console.log('No Match');
  ctx.redirect('/');
});

module.exports = router;

