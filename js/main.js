nunjucks.configure('views', { autoescape: true });
nunjucks.render('index.html', { foo: 'bar' });