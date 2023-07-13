install:
	npm ci

brain-games:
	node bin/brain-games.js

even-game:
	node bin/brain-even.js

calc-game:
	node bin/brain-calc.js

gcd-game:
	node bin/brain-gcd.js

progression-game:
	node bin/brain-progression.js

prime-game:
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
