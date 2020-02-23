# zx81-javascript-emulator
A fork of Simon Holdsworth's *JtyOne* JavaScript Emulator for the Sinclair ZX81.

## History
Between 2003 and 2006, Mike Wynne wrote a C# emulator, `eightyOne` for the Sinclair ZX81 that was notable for its realistic rendering of the ZX81's graphics. Unlike most other emulators of the time, Wynne's emulator could reliably render pseudo high-resolution games like Forty-Niner. In 2006, Some Holdsworth ported the emulator to Java (`JtyOne`) and in 2015 he ported the emulator to JavaScript.

The source and executables for `JtyOne` can be found in the [legacy directory](./legacy). 

## Why this fork?
Holdsworth's code is quite tightly coupled to the layout of his (excellent) [website](http://www.zx81stuff.org.uk/). For people who want to run a single program, the library is daunting to use. This fork is intended to make it easier to run single zx81 programs (which should be in TZX format).

## Show me some running code
To see the code in action
```
cd src
python -m SimpleHTTPServer
```

and then open http://localhost:8000 and click on one of the links. Or simply go to http://localhost:8000/zx81.html?id=1 if you'd like to play chess against a rather weak opponent.

## Using this
You need to convert your `TZX` files to hex format. That's quite easy, e.g.
```
xxd -p VU-CALC.tzx | tr -d '\n' > 2.tzx.hex 
```

Then you need to ensure that the file is accessible when a query ID parameter is passed. Looking at the [src](./src) folder should give you a good idea of what to do. Of course, you might not want static content like this but the principles are much the same. The [zx81.html](./src/zx81.html) source should show you how to invoke the ZX81 emulator.
