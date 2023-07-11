install:
	npm ci

brain-games:
	node bin/brain-games.js

even-game:
	node bin/games/brain-even.js

calc-game:
	node bin/games/brain-calc.js

gcd-game:
	node bin/games/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
