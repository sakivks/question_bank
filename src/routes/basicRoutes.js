const router = require('koa-router')();
const fs = require('fs');

router.get('/', async function(ctx, next) {
  ctx.type = 'html';
  ctx.body = fs.readFileSync('public/index.html', 'utf8');
});

router.get(/(|^$)/, async function(ctx, next) { // final route if nothing matches
  ctx.redirect('/');
});

module.exports = router;
