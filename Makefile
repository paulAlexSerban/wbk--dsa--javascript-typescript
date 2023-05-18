clean:
	rm -rfv */*.js
	rm -rfv */*/*.js
	rm -rfv */*/*/*.js
		rm -rfv */*.js.map
	rm -rfv */*/*.js.map
	rm -rfv */*/*/*.js.map

compile:
	npx tsc 00_demo-use/using-ts.ts --outDir 00_demo-use/dist
	npx tsc 01_basics-and-fundamentals/00_helloTypeScript.ts --outDir 01_basics-and-fundamentals/dist 