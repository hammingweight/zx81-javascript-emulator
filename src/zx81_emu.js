function ZX81EmulatorUI(r, i) {
    function B(t) {
        return 0 == t.length ? "" : t[0] > "9" ? t[0].toLowerCase() : "0"
    }

    function h(t, e) {
        this.charCode = 0, this.key = t, this.shiftKey = e, this.preventDefault = function() {}
    }
    for (var w, v = "", l = "", g = 0, p = screen.width < 750 ? 1 : 2, m = 4, A = !1, x = "", k = [20, 33, 50, 66, 100, 200, 500, 750, 1e3], S = decodeURIComponent(window.location.search.substring(1)), b = S.split("&"), C = 0; C < b.length; C++) {
        var N = b[C].split("=");
        "id" == N[0] ? v = "/tapes/" + N[1] + ".tzx": "track" == N[0] ? (l = N[1], v = "/" != l[0] ? "/zx81/generated/packages/" + B(l) + "/" + l : l) : "tzx" == N[0] ? (l = N[1], "/" == l[1] ? (v = "/zx81/generated/packages/" + l, l = l.substr(2)) : v = l) : "scale" == N[0] ? p = parseInt(N[1]) : "speed" == N[0] ? m = parseInt(N[1]) : "zx80" == N[0] ? A = !0 : "hires" == N[0] && (x = N[1])
    }
    var z = document.getElementById(r),
        E = document.getElementById(i);
    g = 0;
    var Z = v.indexOf("@"); - 1 != Z && (g = parseInt(v.substr(Z + 1)));
    var O = l.indexOf("."); - 1 != O && (l = l.substr(0, O)), 0 > m && (m = 0), m >= k.length && (m = k.length - 1);
    var X = new JtyOne(z, E);
    X.start(v, p, k[m], A, x);
}

function JtyOne(t, e) {
    function n(t) {
        for (var e = new Uint8Array(t.length / 2), n = 0; n < t.length / 2; n++) e[n] = parseInt(t.substr(2 * n, 2), 16);
        return e
    }
    var r = e,
        i = t,
        o = new ZX81Display(r, i),
        a = new ZX81Keyboard;
    document.addEventListener("keydown", function(t) {
        a.keyDown(t)
    }), document.addEventListener("keyup", function(t) {
        a.keyUp(t)
    }), this.start = function(t, e, r, i, a) {
        if (i && (zx81opts.rom = "zx80.rom", zx81opts.machine = 0), "qs" == a && (zx81opts.chrgen = 2), "dk" == a && (zx81opts.chrgen = 1), 1 != e && 2 != e && (e = 1), o.setScale(e), o.setSpeed(r), t.length > 0) {
            var c = 0,
                u = t.indexOf("@"); - 1 != u && (c = parseInt(t.substr(u + 1)), t = t.substr(0, u));
            var f = new XMLHttpRequest,
                y = t + ".hex";
            f.open("GET", y, !0);
            var B = this;
            f.onreadystatechange = function() {
                if (4 === this.readyState && 200 === this.status) {
                    var e = 0;
                    ".p" == t.substr(t.length - 2, 2).toLowerCase() && (e = 1), ".p.zip" == t.substr(t.length - 6, 6).toLowerCase() && (e = 3), ".tzx" == t.substr(t.length - 4, 4).toLowerCase() && (e = 2), ".tzx.zip" == t.substr(t.length - 8, 8).toLowerCase() && (e = 4), B.start2(n(this.responseText), e, c)
                } else 4 === this.readyState && 404 === this.status && (console.log("Failed to load " + t), B.start2(new Uint8Array, 0, 0))
            }, f.send()
        } else this.start2(new Uint8Array, 0, 0)
    }, this.start2 = function(t, e, n) {
        o.start(t, e, n, a.zxKeyboard)
    }, this.setScale = function(t) {
        return o.setScale(t)
    }, this.setSpeed = function(t) {
        return o.setSpeed(t)
    }, this.stop = function(t) {
        o.stop(t)
    }, this.keyDown = function(t) {
        a.keyDown(t)
    }, this.keyUp = function(t) {
        a.keyUp(t)
    }
}

function Z80(t) {
    function e() {
        var t, e, n, r;
        for (t = 0; 256 > t; t++) {
            for (y[t] = 168 & t, e = t, r = 0, n = 0; 8 > n; n++) r ^= 1 & e, e >>= 1;
            B[t] = 0 != r ? 0 : 4, d[t] = y[t] | B[t]
        }
        y[0] |= 64, d[0] |= 64
    }

    function n() {}

    function r() {
        E--, D = D - 1 & 255
    }
    var i = 0,
        o = 0,
        a = [0, 16, 16, 16, 0, 0, 0, 16],
        c = [0, 0, 16, 0, 16, 0, 16, 16],
        u = [0, 0, 0, 4, 4, 0, 0, 0],
        f = [0, 4, 0, 0, 0, 0, 4, 0],
        y = new Uint8Array(256),
        B = new Uint8Array(256),
        d = new Uint8Array(256),
        s = new Uint8Array(12),
        h = new Uint16Array(s.buffer, 0, 5),
        w = 1,
        v = 0,
        l = 3,
        g = 2,
        p = 5,
        m = 4,
        A = 7,
        x = 6,
        k = 9,
        S = 8,
        b = 10,
        C = 0,
        N = 1,
        T = 2,
        I = 3,
        P = 4;
    h[0] = 1, 1 == s[1] && (w = 0, v = 1, l = 2, g = 3, p = 4, m = 5, A = 6, x = 7, k = 8, S = 9);
    var z = 0,
        E = 0,
        L = 0,
        M = 0,
        U = 0,
        R = 0,
        F = 0,
        Z = 0,
        O = 0,
        X = 0,
        D = 0,
        _ = 0,
        K = 0,
        V = 0,
        H = 0;
    this.getI = function() {
        return X
    }, this.getR = function() {
        return D
    }, this.getIR = function() {
        return X << 8 | 128 & _ | D - 1 & 127
    }, this.getDE = function() {
        return h[N]
    }, this.getSP = function() {
        return z
    }, this.getPC = function() {
        return E
    }, this.setI = function(t) {
        X = t
    }, this.setIY = function(t) {
        h[P] = t
    }, this.setSP = function(t) {
        z = t
    }, this.setPC = function(t) {
        E = t
    }, this.addTs = function(t) {
        o += t
    }, this.reset = function() {
        e(), h[C] = 0, h[N] = 0, h[T] = 0, h[I] = 0, h[P] = 0, z = E = F = Z = O = 0, X = D = _ = 0, L = M = U = R = 0, K = V = H = 0, i = 0
    }, this.interrupt = function(e) {
        if (0 != K) switch (0 != i && (E++, i = 0), K = V = 0, t.writeByte(--z, E >> 8), t.writeByte(--z, 255 & E), D = D + 1 & 255, H) {
            case 0:
                return E = 56, 13;
            case 1:
                return E = 56, 13;
            case 2:
                var n = X << 8 | 255;
                return E = t.readByte(n++) + (t.readByte(n) << 8), 19;
            default:
                return 12
        }
        return 0
    }, this.nmi = function(e) {
        var n = 0;
        return K = 0, 0 != i && (i = 0, E++, n = e / 2 - 207, n = 4 - n, 0 > n && (n = 0)), t.writeByte(--z, E >> 8), t.writeByte(--z, 255 & E), D = D + 1 & 255, E = 102, 4 + n
    }, this.doOpcode = function() {
        o = 4, D = D + 1 & 255;
        var e = t.opcodeFetch(E++);
        return G[e](), D = 127 & D, o
    };
    var G = [n, function() {
        o += 6, s[v] = t.readByte(E++), s[w] = t.readByte(E++)
    }, function() {
        o += 3, t.writeByte(h[C], L)
    }, function() {
        o += 2, h[C]++
    }, function() {
        s[w]++, U = 1 & U | (128 == s[w] ? 4 : 0) | ((15 & s[w]) > 0 ? 0 : 16) | y[s[w]]
    }, function() {
        U = 1 & U | ((15 & s[w]) > 0 ? 0 : 16) | 2, s[w]--, U |= (127 == s[w] ? 4 : 0) | y[s[w]]
    }, function() {
        o += 3, s[w] = t.readByte(E++)
    }, function() {
        L = 255 & (L << 1 | L >> 7), U = 196 & U | 41 & L
    }, function() {
        var t = L;
        L = M, M = t, t = U, U = R, R = t
    }, function() {
        var t = h[T] + h[C],
            e = (2048 & h[T]) >> 11 | (2048 & h[C]) >> 10 | (2048 & t) >> 9;
        o += 7, h[T] = t, U = 196 & U | ((65536 & t) > 0 ? 1 : 0) | t >> 8 & 40 | a[e]
    }, function() {
        o += 3, L = t.readByte(h[C])
    }, function() {
        o += 2, h[C]--
    }, function() {
        s[v]++, U = 1 & U | (128 == s[v] ? 4 : 0) | ((15 & s[v]) > 0 ? 0 : 16) | y[s[v]]
    }, function() {
        U = 1 & U | ((15 & s[v]) > 0 ? 0 : 16) | 2, s[v]--, U |= (127 == s[v] ? 4 : 0) | y[s[v]]
    }, function() {
        o += 3, s[v] = t.readByte(E++)
    }, function() {
        U = 196 & U | 1 & L, L = 255 & (L >> 1 | L << 7), U |= 40 & L
    }, function() {
        if (o += 4, s[w]--, 0 != s[w]) {
            o += 5;
            var e = t.readByte(E);
            E += 128 > e ? e : e - 256
        }
        E++
    }, function() {
        o += 6, s[g] = t.readByte(E++), s[l] = t.readByte(E++)
    }, function() {
        o += 3, t.writeByte(h[N], L)
    }, function() {
        o += 2, h[N]++
    }, function() {
        s[l]++, U = 1 & U | (128 == s[l] ? 4 : 0) | ((15 & s[l]) > 0 ? 0 : 16) | y[s[l]]
    }, function() {
        U = 1 & U | ((15 & s[l]) > 0 ? 0 : 16) | 2, s[l]--, U |= (127 == s[l] ? 4 : 0) | y[s[l]]
    }, function() {
        o += 3, s[l] = t.readByte(E++)
    }, function() {
        var t = L;
        L = 255 & (L << 1 | 1 & U), U = 196 & U | 40 & L | t >> 7
    }, function() {
        o += 3, o += 5;
        var e = t.readByte(E);
        E += 128 > e ? e : e - 256, E++
    }, function() {
        var t = h[T] + h[N],
            e = (2048 & h[T]) >> 11 | (2048 & h[N]) >> 10 | (2048 & t) >> 9;
        o += 7, h[T] = t, U = 196 & U | ((65536 & t) > 0 ? 1 : 0) | t >> 8 & 40 | a[e]
    }, function() {
        o += 3, L = t.readByte(h[N])
    }, function() {
        o += 2, h[N]--
    }, function() {
        s[g]++, U = 1 & U | (128 == s[g] ? 4 : 0) | ((15 & s[g]) > 0 ? 0 : 16) | y[s[g]]
    }, function() {
        U = 1 & U | ((15 & s[g]) > 0 ? 0 : 16) | 2, s[g]--, U |= (127 == s[g] ? 4 : 0) | y[s[g]]
    }, function() {
        o += 3, s[g] = t.readByte(E++)
    }, function() {
        var t = L;
        L = 255 & (t >> 1 | U << 7), U = 196 & U | 40 & L | 1 & t
    }, function() {
        if (o += 3, !(64 & U)) {
            o += 5;
            var e = t.readByte(E);
            E += 128 > e ? e : e - 256
        }
        E++
    }, function() {
        o += 6, s[m] = t.readByte(E++), s[p] = t.readByte(E++)
    }, function() {
        o += 12;
        var e = t.readByte(E++);
        e |= t.readByte(E++) << 8, t.writeByte(e++, 255 & h[T]), t.writeByte(e, h[T] >> 8)
    }, function() {
        o += 2, h[T]++
    }, function() {
        s[p]++, U = 1 & U | (128 == s[p] ? 4 : 0) | ((15 & s[p]) > 0 ? 0 : 16) | y[s[p]]
    }, function() {
        U = 1 & U | ((15 & s[p]) > 0 ? 0 : 16) | 2, s[p]--, U |= (127 == s[p] ? 4 : 0) | y[s[p]]
    }, function() {
        o += 3, s[p] = t.readByte(E++)
    }, function() {
        var t = 0,
            e = 1 & U;
        if ((16 & U || (15 & L) > 9) && (t = 6), (0 != e || L > 159) && (t |= 96), L > 153 && (e = 1), 2 & U) {
            var n = L - t,
                r = (136 & L) >> 3 | (136 & t) >> 2 | (136 & n) >> 1;
            L = 255 & n, U = 2 | ((256 & n) > 0 ? 1 : 0) | c[7 & r] | f[r >> 4] | y[L]
        } else {
            L > 144 && (15 & L) > 9 && (t |= 96);
            var i = L + t,
                r = (136 & L) >> 3 | (136 & t) >> 2 | (136 & i) >> 1;
            L = 255 & i, U = ((256 & i) > 0 ? 1 : 0) | a[7 & r] | u[r >> 4] | y[L]
        }
        U = -6 & U | e | B[L]
    }, function() {
        if (o += 3, 64 & U) {
            o += 5;
            var e = t.readByte(E);
            E += 128 > e ? e : e - 256
        }
        E++
    }, function() {
        var t = h[T] + h[T],
            e = (2048 & h[T]) >> 11 | (2048 & h[T]) >> 10 | (2048 & t) >> 9;
        o += 7, h[T] = t, U = 196 & U | ((65536 & t) > 0 ? 1 : 0) | t >> 8 & 40 | a[e]
    }, function() {
        o += 12;
        var e = t.readByte(E++);
        e |= t.readByte(E++) << 8, h[T] = t.readByte(e++) + (t.readByte(e) << 8)
    }, function() {
        o += 2, h[T]--
    }, function() {
        s[m]++, U = 1 & U | (128 == s[m] ? 4 : 0) | ((15 & s[m]) > 0 ? 0 : 16) | y[s[m]]
    }, function() {
        U = 1 & U | ((15 & s[m]) > 0 ? 0 : 16) | 2, s[m]--, U |= (127 == s[m] ? 4 : 0) | y[s[m]]
    }, function() {
        o += 3, s[m] = t.readByte(E++)
    }, function() {
        L = 255 ^ L, U = 197 & U | 40 & L | 18
    }, function() {
        if (o += 3, !(1 & U)) {
            o += 5;
            var e = t.readByte(E);
            E += 128 > e ? e : e - 256
        }
        E++
    }, function() {
        o += 6, z = t.readByte(E++) + (t.readByte(E++) << 8)
    }, function() {
        o += 9;
        var e = t.readByte(E++);
        e |= t.readByte(E++) << 8, t.writeByte(e, L)
    }, function() {
        o += 2, z++
    }, function() {
        o += 7, s[b] = t.readByte(h[T]), s[b]++, U = 1 & U | (128 == s[b] ? 4 : 0) | ((15 & s[b]) > 0 ? 0 : 16) | y[s[b]], t.writeByte(h[T], s[b])
    }, function() {
        o += 7, s[b] = t.readByte(h[T]), U = 1 & U | ((15 & s[b]) > 0 ? 0 : 16) | 2, s[b]--, U |= (127 == s[b] ? 4 : 0) | y[s[b]], t.writeByte(h[T], s[b])
    }, function() {
        o += 6, t.writeByte(h[T], t.readByte(E++))
    }, function() {
        U &= -19, U |= 40 & L | 1
    }, function() {
        if (o += 3, 1 & U) {
            o += 5;
            var e = t.readByte(E);
            E += 128 > e ? e : e - 256
        }
        E++
    }, function() {
        var t = h[T] + z,
            e = (2048 & h[T]) >> 11 | (2048 & z) >> 10 | (2048 & t) >> 9;
        o += 7, h[T] = t, U = 196 & U | ((65536 & t) > 0 ? 1 : 0) | t >> 8 & 40 | a[e]
    }, function() {
        o += 9;
        var e = t.readByte(E++);
        e |= t.readByte(E++) << 8, L = t.readByte(e)
    }, function() {
        o += 2, z--
    }, function() {
        L = L + 1 & 255, U = 1 & U | (128 == L ? 4 : 0) | ((15 & L) > 0 ? 0 : 16) | y[L]
    }, function() {
        U = 1 & U | ((15 & L) > 0 ? 0 : 16) | 2, L = L - 1 & 255, U |= (127 == L ? 4 : 0) | y[L]
    }, function() {
        o += 3, L = t.readByte(E++)
    }, function() {
        U = 196 & U | (0 != (1 & U) ? 16 : 1) | 40 & L
    }, n, function() {
        s[w] = s[v]
    }, function() {
        s[w] = s[l]
    }, function() {
        s[w] = s[g]
    }, function() {
        s[w] = s[p]
    }, function() {
        s[w] = s[m]
    }, function() {
        o += 3, s[w] = t.readByte(h[T])
    }, function() {
        s[w] = L
    }, function() {
        s[v] = s[w]
    }, n, function() {
        s[v] = s[l]
    }, function() {
        s[v] = s[g]
    }, function() {
        s[v] = s[p]
    }, function() {
        s[v] = s[m]
    }, function() {
        o += 3, s[v] = t.readByte(h[T])
    }, function() {
        s[v] = L
    }, function() {
        s[l] = s[w]
    }, function() {
        s[l] = s[v]
    }, n, function() {
        s[l] = s[g]
    }, function() {
        s[l] = s[p]
    }, function() {
        s[l] = s[m]
    }, function() {
        o += 3, s[l] = t.readByte(h[T])
    }, function() {
        s[l] = L
    }, function() {
        s[g] = s[w]
    }, function() {
        s[g] = s[v]
    }, function() {
        s[g] = s[l]
    }, n, function() {
        s[g] = s[p]
    }, function() {
        s[g] = s[m]
    }, function() {
        o += 3, s[g] = t.readByte(h[T])
    }, function() {
        s[g] = L
    }, function() {
        s[p] = s[w]
    }, function() {
        s[p] = s[v]
    }, function() {
        s[p] = s[l]
    }, function() {
        s[p] = s[g]
    }, n, function() {
        s[p] = s[m]
    }, function() {
        o += 3, s[p] = t.readByte(h[T])
    }, function() {
        s[p] = L
    }, function() {
        s[m] = s[w]
    }, function() {
        s[m] = s[v]
    }, function() {
        s[m] = s[l]
    }, function() {
        s[m] = s[g]
    }, function() {
        s[m] = s[p]
    }, n, function() {
        o += 3, s[m] = t.readByte(h[T])
    }, function() {
        s[m] = L
    }, function() {
        o += 3, t.writeByte(h[T], s[w])
    }, function() {
        o += 3, t.writeByte(h[T], s[v])
    }, function() {
        o += 3, t.writeByte(h[T], s[l])
    }, function() {
        o += 3, t.writeByte(h[T], s[g])
    }, function() {
        o += 3, t.writeByte(h[T], s[p])
    }, function() {
        o += 3, t.writeByte(h[T], s[m])
    }, function() {
        i = 1, E--
    }, function() {
        o += 3, t.writeByte(h[T], L)
    }, function() {
        L = s[w]
    }, function() {
        L = s[v]
    }, function() {
        L = s[l]
    }, function() {
        L = s[g]
    }, function() {
        L = s[p]
    }, function() {
        L = s[m]
    }, function() {
        o += 3, L = t.readByte(h[T])
    }, n, function() {
        var t = L + s[w],
            e = (136 & L) >> 3 | (136 & s[w]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L + s[v],
            e = (136 & L) >> 3 | (136 & s[v]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L + s[l],
            e = (136 & L) >> 3 | (136 & s[l]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L + s[g],
            e = (136 & L) >> 3 | (136 & s[g]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L + s[p],
            e = (136 & L) >> 3 | (136 & s[p]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L + s[m],
            e = (136 & L) >> 3 | (136 & s[m]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        o += 3;
        var e = t.readByte(h[T]),
            n = L + e,
            r = (136 & L) >> 3 | (136 & e) >> 2 | (136 & n) >> 1;
        L = 255 & n, U = ((256 & n) > 0 ? 1 : 0) | a[7 & r] | u[r >> 4] | y[L]
    }, function() {
        var t = L + L,
            e = (136 & L) >> 3 | (136 & L) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L + s[w] + (1 & U),
            e = (136 & L) >> 3 | (136 & s[w]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L + s[v] + (1 & U),
            e = (136 & L) >> 3 | (136 & s[v]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L + s[l] + (1 & U),
            e = (136 & L) >> 3 | (136 & s[l]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L + s[g] + (1 & U),
            e = (136 & L) >> 3 | (136 & s[g]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L + s[p] + (1 & U),
            e = (136 & L) >> 3 | (136 & s[p]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L + s[m] + (1 & U),
            e = (136 & L) >> 3 | (136 & s[m]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        o += 3;
        var e = t.readByte(h[T]),
            n = L + e + (1 & U),
            r = (136 & L) >> 3 | (136 & e) >> 2 | (136 & n) >> 1;
        L = 255 & n, U = ((256 & n) > 0 ? 1 : 0) | a[7 & r] | u[r >> 4] | y[L]
    }, function() {
        var t = L + L + (1 & U),
            e = (136 & L) >> 3 | (136 & L) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
    }, function() {
        var t = L - s[w],
            e = (136 & L) >> 3 | (136 & s[w]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        var t = L - s[v],
            e = (136 & L) >> 3 | (136 & s[v]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        var t = L - s[l],
            e = (136 & L) >> 3 | (136 & s[l]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        var t = L - s[g],
            e = (136 & L) >> 3 | (136 & s[g]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        var t = L - s[p],
            e = (136 & L) >> 3 | (136 & s[p]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        var t = L - s[m],
            e = (136 & L) >> 3 | (136 & s[m]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        o += 3;
        var e = t.readByte(h[T]),
            n = L - e,
            r = (136 & L) >> 3 | (136 & e) >> 2 | (136 & n) >> 1;
        L = 255 & n, U = 2 | ((256 & n) > 0 ? 1 : 0) | c[7 & r] | f[r >> 4] | y[L]
    }, function() {
        var t = L - L,
            e = (136 & L) >> 3 | (136 & L) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        var t = L - s[w] - (1 & U),
            e = (136 & L) >> 3 | (136 & s[w]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        var t = L - s[v] - (1 & U),
            e = (136 & L) >> 3 | (136 & s[v]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        var t = L - s[l] - (1 & U),
            e = (136 & L) >> 3 | (136 & s[l]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        var t = L - s[g] - (1 & U),
            e = (136 & L) >> 3 | (136 & s[g]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        var t = L - s[p] - (1 & U),
            e = (136 & L) >> 3 | (136 & s[p]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        var t = L - s[m] - (1 & U),
            e = (136 & L) >> 3 | (136 & s[m]) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        o += 3;
        var e = t.readByte(h[T]),
            n = L - e - (1 & U),
            r = (136 & L) >> 3 | (136 & e) >> 2 | (136 & n) >> 1;
        L = 255 & n, U = 2 | ((256 & n) > 0 ? 1 : 0) | c[7 & r] | f[r >> 4] | y[L]
    }, function() {
        var t = L - L - (1 & U),
            e = (136 & L) >> 3 | (136 & L) >> 2 | (136 & t) >> 1;
        L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
    }, function() {
        L &= s[w], U = 16 | d[L]
    }, function() {
        L &= s[v], U = 16 | d[L]
    }, function() {
        L &= s[l], U = 16 | d[L]
    }, function() {
        L &= s[g], U = 16 | d[L]
    }, function() {
        L &= s[p], U = 16 | d[L]
    }, function() {
        L &= s[m], U = 16 | d[L]
    }, function() {
        o += 3, L &= t.readByte(h[T]), U = 16 | d[L]
    }, function() {
        L &= L, U = 16 | d[L]
    }, function() {
        L ^= s[w], U = d[L]
    }, function() {
        L ^= s[v], U = d[L]
    }, function() {
        L ^= s[l], U = d[L]
    }, function() {
        L ^= s[g], U = d[L]
    }, function() {
        L ^= s[p], U = d[L]
    }, function() {
        L ^= s[m], U = d[L]
    }, function() {
        o += 3, L ^= t.readByte(h[T]), U = d[L]
    }, function() {
        L ^= L, U = d[L]
    }, function() {
        L |= s[w], U = d[L]
    }, function() {
        L |= s[v], U = d[L]
    }, function() {
        L |= s[l], U = d[L]
    }, function() {
        L |= s[g], U = d[L]
    }, function() {
        L |= s[p], U = d[L]
    }, function() {
        L |= s[m], U = d[L]
    }, function() {
        o += 3, L |= t.readByte(h[T]), U = d[L]
    }, function() {
        L |= L, U = d[L]
    }, function() {
        var t = L - s[w],
            e = (136 & L) >> 3 | (136 & s[w]) >> 2 | (136 & t) >> 1;
        U = 2 | ((256 & t) > 0 ? 1 : t > 0 ? 0 : 64) | c[7 & e] | f[e >> 4] | 40 & s[w] | 128 & t
    }, function() {
        var t = L - s[v],
            e = (136 & L) >> 3 | (136 & s[v]) >> 2 | (136 & t) >> 1;
        U = 2 | ((256 & t) > 0 ? 1 : t > 0 ? 0 : 64) | c[7 & e] | f[e >> 4] | 40 & s[v] | 128 & t
    }, function() {
        var t = L - s[l],
            e = (136 & L) >> 3 | (136 & s[l]) >> 2 | (136 & t) >> 1;
        U = 2 | ((256 & t) > 0 ? 1 : t > 0 ? 0 : 64) | c[7 & e] | f[e >> 4] | 40 & s[l] | 128 & t
    }, function() {
        var t = L - s[g],
            e = (136 & L) >> 3 | (136 & s[g]) >> 2 | (136 & t) >> 1;
        U = 2 | ((256 & t) > 0 ? 1 : t > 0 ? 0 : 64) | c[7 & e] | f[e >> 4] | 40 & s[g] | 128 & t
    }, function() {
        var t = L - s[p],
            e = (136 & L) >> 3 | (136 & s[p]) >> 2 | (136 & t) >> 1;
        U = 2 | ((256 & t) > 0 ? 1 : t > 0 ? 0 : 64) | c[7 & e] | f[e >> 4] | 40 & s[p] | 128 & t
    }, function() {
        var t = L - s[m],
            e = (136 & L) >> 3 | (136 & s[m]) >> 2 | (136 & t) >> 1;
        U = 2 | ((256 & t) > 0 ? 1 : t > 0 ? 0 : 64) | c[7 & e] | f[e >> 4] | 40 & s[m] | 128 & t
    }, function() {
        o += 3;
        var e = t.readByte(h[T]),
            n = L - e,
            r = (136 & L) >> 3 | (136 & e) >> 2 | (136 & n) >> 1;
        U = 2 | ((256 & n) > 0 ? 1 : n > 0 ? 0 : 64) | c[7 & r] | f[r >> 4] | 40 & e | 128 & n
    }, function() {
        var t = L - L,
            e = (136 & L) >> 3 | (136 & L) >> 2 | (136 & t) >> 1;
        U = 2 | ((256 & t) > 0 ? 1 : t > 0 ? 0 : 64) | c[7 & e] | f[e >> 4] | 40 & L | 128 & t
    }, function() {
        o++, 64 & U || (o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8))
    }, function() {
        o += 6, s[v] = t.readByte(z++), s[w] = t.readByte(z++)
    }, function() {
        if (o += 6, 64 & U) E += 2;
        else {
            var e = E;
            E = t.readByte(e++) + (t.readByte(e) << 8)
        }
    }, function() {
        o += 6;
        var e = E;
        E = t.readByte(e++) + (t.readByte(e) << 8)
    }, function() {
        if (o += 6, 64 & U) E += 2;
        else {
            var e = t.readByte(E++);
            o += 1;
            var n = t.readByte(E++);
            z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = e + (n << 8)
        }
    }, function() {
        o++, z--, o += 6, t.writeByte(z, s[w]), z--, t.writeByte(z, s[v])
    }, function() {
        o += 3;
        var e = t.readByte(E++),
            n = L + e,
            r = (136 & L) >> 3 | (136 & e) >> 2 | (136 & n) >> 1;
        L = 255 & n, U = ((256 & n) > 0 ? 1 : 0) | a[7 & r] | u[r >> 4] | y[L]
    }, function() {
        o++, z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = 0
    }, function() {
        o++, 64 & U && (o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8))
    }, function() {
        o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8)
    }, function() {
        if (o += 6, 64 & U) {
            var e = E;
            E = t.readByte(e++) + (t.readByte(e) << 8)
        } else E += 2
    }, function() {
        o += 4;
        var e = t.opcodeFetch(E++);
        D = D + 1 & 255, z80CBOpcodes[e]()
    }, function() {
        if (o += 6, 64 & U) {
            var e = t.readByte(E++);
            o += 1;
            var n = t.readByte(E++);
            z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = e + (n << 8)
        } else E += 2
    }, function() {
        o += 6;
        var e = t.readByte(E++);
        o += 1;
        var n = t.readByte(E++);
        z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = e + (n << 8)
    }, function() {
        o += 3;
        var e = t.readByte(E++),
            n = L + e + (1 & U),
            r = (136 & L) >> 3 | (136 & e) >> 2 | (136 & n) >> 1;
        L = 255 & n, U = ((256 & n) > 0 ? 1 : 0) | a[7 & r] | u[r >> 4] | y[L]
    }, function() {
        o++, z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = 8
    }, function() {
        o++, 1 & U || (o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8))
    }, function() {
        o += 6, s[g] = t.readByte(z++), s[l] = t.readByte(z++)
    }, function() {
        if (o += 6, 1 & U) E += 2;
        else {
            var e = E;
            E = t.readByte(e++) + (t.readByte(e) << 8)
        }
    }, function() {
        o += 7;
        var e = t.readByte(E++) + (L << 8);
        t.writePort(e, L)
    }, function() {
        if (o += 6, 1 & U) E += 2;
        else {
            var e = t.readByte(E++);
            o += 1;
            var n = t.readByte(E++);
            z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = e + (n << 8)
        }
    }, function() {
        o++, z--, o += 6, t.writeByte(z, s[l]), z--, t.writeByte(z, s[g])
    }, function() {
        o += 3;
        var e = t.readByte(E++),
            n = L - e,
            r = (136 & L) >> 3 | (136 & e) >> 2 | (136 & n) >> 1;
        L = 255 & n, U = 2 | ((256 & n) > 0 ? 1 : 0) | c[7 & r] | f[r >> 4] | y[L]
    }, function() {
        o++, z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = 16
    }, function() {
        o++, 1 & U && (o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8))
    }, function() {
        var t = h[C];
        h[C] = F, F = t, t = h[N], h[N] = Z, Z = t, t = h[T], h[T] = O, O = t
    }, function() {
        if (o += 6, 1 & U) {
            var e = E;
            E = t.readByte(e++) + (t.readByte(e) << 8)
        } else E += 2
    }, function() {
        if (!t.patchTest()) {
            o += 7;
            var e = t.readByte(E++) + (L << 8);
            L = t.readPort(e)
        }
    }, function() {
        if (o += 6, 1 & U) {
            var e = t.readByte(E++);
            o += 1;
            var n = t.readByte(E++);
            z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = e + (n << 8)
        } else E += 2
    }, function() {
        o += 4;
        var e = t.opcodeFetch(E++);
        D = D + 1 & 255, J = I, Y = x, q = A, j[e]()
    }, function() {
        o += 3;
        var e = t.readByte(E++),
            n = L - e - (1 & U),
            r = (136 & L) >> 3 | (136 & e) >> 2 | (136 & n) >> 1;
        L = 255 & n, U = 2 | ((256 & n) > 0 ? 1 : 0) | c[7 & r] | f[r >> 4] | y[L]
    }, function() {
        o++, z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = 24
    }, function() {
        o++, 4 & U || (o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8))
    }, function() {
        o += 6, s[m] = t.readByte(z++), s[p] = t.readByte(z++)
    }, function() {
        if (o += 6, 4 & U) E += 2;
        else {
            var e = E;
            E = t.readByte(e++) + (t.readByte(e) << 8)
        }
    }, function() {
        var e = t.readByte(z),
            n = t.readByte(z + 1);
        o += 15, t.writeByte(z, s[m]), t.writeByte(z + 1, s[p]), s[m] = e, s[p] = n
    }, function() {
        if (o += 6, 4 & U) E += 2;
        else {
            var e = t.readByte(E++);
            o += 1;
            var n = t.readByte(E++);
            z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = e + (n << 8)
        }
    }, function() {
        o++, z--, o += 6, t.writeByte(z, s[p]), z--, t.writeByte(z, s[m])
    }, function() {
        o += 3, L &= t.readByte(E++), U = 16 | d[L]
    }, function() {
        o++, z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = 32
    }, function() {
        o++, 4 & U && (o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8))
    }, function() {
        E = h[T]
    }, function() {
        if (o += 6, 4 & U) {
            var e = E;
            E = t.readByte(e++) + (t.readByte(e) << 8)
        } else E += 2
    }, function() {
        var t = h[N];
        h[N] = h[T], h[T] = t
    }, function() {
        if (o += 6, 4 & U) {
            var e = t.readByte(E++);
            o += 1;
            var n = t.readByte(E++);
            z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = e + (n << 8)
        } else E += 2
    }, function() {
        o += 4;
        var e = t.opcodeFetch(E++);
        D = D + 1 & 255, W[e]()
    }, function() {
        o += 3, L ^= t.readByte(E++), U = d[L]
    }, function() {
        o++, z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = 40
    }, function() {
        o++, 128 & U || (o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8))
    }, function() {
        o += 6, U = t.readByte(z++), L = t.readByte(z++)
    }, function() {
        if (o += 6, 128 & U) E += 2;
        else {
            var e = E;
            E = t.readByte(e++) + (t.readByte(e) << 8)
        }
    }, function() {
        K = V = 0
    }, function() {
        if (o += 6, 128 & U) E += 2;
        else {
            var e = t.readByte(E++);
            o += 1;
            var n = t.readByte(E++);
            z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = e + (n << 8)
        }
    }, function() {
        o += 7, z--, o += 7, t.writeByte(z, L), z--, t.writeByte(z, U)
    }, function() {
        o += 3, L |= t.readByte(E++), U = d[L]
    }, function() {
        o++, z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = 48
    }, function() {
        o++, 128 & U && (o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8))
    }, function() {
        o += 2, z = h[T]
    }, function() {
        if (o += 6, 128 & U) {
            var e = E;
            E = t.readByte(e++) + (t.readByte(e) << 8)
        } else E += 2
    }, function() {
        K = V = 1
    }, function() {
        if (o += 6, 128 & U) {
            var e = t.readByte(E++);
            o += 1;
            var n = t.readByte(E++);
            z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = e + (n << 8)
        } else E += 2
    }, function() {
        o += 4;
        var e = t.opcodeFetch(E++);
        D = D + 1 & 255, J = P, Y = S, q = k, j[e]()
    }, function() {
        o += 3;
        var e = t.readByte(E++),
            n = L - e,
            r = (136 & L) >> 3 | (136 & e) >> 2 | (136 & n) >> 1;
        U = 2 | ((256 & n) > 0 ? 1 : n > 0 ? 0 : 64) | c[7 & r] | f[r >> 4] | 40 & e | 128 & n
    }, function() {
        o++, z--, o += 6, t.writeByte(z, E >> 8), z--, t.writeByte(z, 255 & E), E = 56
    }];
    z80CBOpcodes = [function() {
        var t = s[w];
        s[w] = t << 1 | t >> 7, U = 1 & s[w] | d[s[w]]
    }, function() {
        var t = s[v];
        s[v] = t << 1 | t >> 7, U = 1 & s[v] | d[s[v]]
    }, function() {
        var t = s[l];
        s[l] = t << 1 | t >> 7, U = 1 & s[l] | d[s[l]]
    }, function() {
        var t = s[g];
        s[g] = t << 1 | t >> 7, U = 1 & s[g] | d[s[g]]
    }, function() {
        var t = s[p];
        s[p] = t << 1 | t >> 7, U = 1 & s[p] | d[s[p]]
    }, function() {
        var t = s[m];
        s[m] = t << 1 | t >> 7, U = 1 & s[m] | d[s[m]]
    }, function() {
        s[b] = t.readByte(h[T]), o += 7;
        var e = s[b];
        s[b] = e << 1 | e >> 7, U = 1 & s[b] | d[s[b]], t.writeByte(h[T], s[b])
    }, function() {
        var t = L;
        L = 255 & (t << 1 | t >> 7), U = 1 & L | d[L]
    }, function() {
        var t = s[w];
        s[w] = t >> 1 | t << 7, U = 1 & t | d[s[w]]
    }, function() {
        var t = s[v];
        s[v] = t >> 1 | t << 7, U = 1 & t | d[s[v]]
    }, function() {
        var t = s[l];
        s[l] = t >> 1 | t << 7, U = 1 & t | d[s[l]]
    }, function() {
        var t = s[g];
        s[g] = t >> 1 | t << 7, U = 1 & t | d[s[g]]
    }, function() {
        var t = s[p];
        s[p] = t >> 1 | t << 7, U = 1 & t | d[s[p]]
    }, function() {
        var t = s[m];
        s[m] = t >> 1 | t << 7, U = 1 & t | d[s[m]]
    }, function() {
        s[b] = t.readByte(h[T]), o += 7;
        var e = s[b];
        s[b] = e >> 1 | e << 7, U = 1 & e | d[s[b]], t.writeByte(h[T], s[b])
    }, function() {
        var t = L;
        L = 255 & (L >> 1 | L << 7), U = 1 & t | d[L]
    }, function() {
        var t = s[w];
        s[w] = t << 1 | 1 & U, U = t >> 7 | d[s[w]]
    }, function() {
        var t = s[v];
        s[v] = t << 1 | 1 & U, U = t >> 7 | d[s[v]]
    }, function() {
        var t = s[l];
        s[l] = t << 1 | 1 & U, U = t >> 7 | d[s[l]]
    }, function() {
        var t = s[g];
        s[g] = t << 1 | 1 & U, U = t >> 7 | d[s[g]]
    }, function() {
        var t = s[p];
        s[p] = t << 1 | 1 & U, U = t >> 7 | d[s[p]]
    }, function() {
        var t = s[m];
        s[m] = t << 1 | 1 & U, U = t >> 7 | d[s[m]]
    }, function() {
        s[b] = t.readByte(h[T]), o += 7;
        var e = s[b];
        s[b] = e << 1 | 1 & U, U = e >> 7 | d[s[b]], t.writeByte(h[T], s[b])
    }, function() {
        var t = L;
        L = 255 & (L << 1 | 1 & U), U = t >> 7 | d[L]
    }, function() {
        var t = s[w];
        s[w] = t >> 1 | U << 7, U = 1 & t | d[s[w]]
    }, function() {
        var t = s[v];
        s[v] = t >> 1 | U << 7, U = 1 & t | d[s[v]]
    }, function() {
        var t = s[l];
        s[l] = t >> 1 | U << 7, U = 1 & t | d[s[l]]
    }, function() {
        var t = s[g];
        s[g] = t >> 1 | U << 7, U = 1 & t | d[s[g]]
    }, function() {
        var t = s[p];
        s[p] = t >> 1 | U << 7, U = 1 & t | d[s[p]]
    }, function() {
        var t = s[m];
        s[m] = t >> 1 | U << 7, U = 1 & t | d[s[m]]
    }, function() {
        s[b] = t.readByte(h[T]), o += 7;
        var e = s[b];
        s[b] = e >> 1 | U << 7, U = 1 & e | d[s[b]], t.writeByte(h[T], s[b])
    }, function() {
        var t = L;
        L = 255 & (t >> 1 | U << 7), U = 1 & t | d[L]
    }, function() {
        U = s[w] >> 7, s[w] <<= 1, U |= d[s[w]]
    }, function() {
        U = s[v] >> 7, s[v] <<= 1, U |= d[s[v]]
    }, function() {
        U = s[l] >> 7, s[l] <<= 1, U |= d[s[l]]
    }, function() {
        U = s[g] >> 7, s[g] <<= 1, U |= d[s[g]]
    }, function() {
        U = s[p] >> 7, s[p] <<= 1, U |= d[s[p]]
    }, function() {
        U = s[m] >> 7, s[m] <<= 1, U |= d[s[m]]
    }, function() {
        s[b] = t.readByte(h[T]), o += 7, U = s[b] >> 7, s[b] <<= 1, U |= d[s[b]], t.writeByte(h[T], s[b])
    }, function() {
        U = L >> 7, L = L << 1 & 255, U |= d[L]
    }, function() {
        var t = s[w];
        s[w] = 128 & t | t >> 1, U = 1 & t | d[s[w]]
    }, function() {
        var t = s[v];
        s[v] = 128 & t | t >> 1, U = 1 & t | d[s[v]]
    }, function() {
        var t = s[l];
        s[l] = 128 & t | t >> 1, U = 1 & t | d[s[l]]
    }, function() {
        var t = s[g];
        s[g] = 128 & t | t >> 1, U = 1 & t | d[s[g]]
    }, function() {
        var t = s[p];
        s[p] = 128 & t | t >> 1, U = 1 & t | d[s[p]]
    }, function() {
        var t = s[m];
        s[m] = 128 & t | t >> 1, U = 1 & t | d[s[m]]
    }, function() {
        s[b] = t.readByte(h[T]), o += 7;
        var e = s[b];
        s[b] = 128 & e | e >> 1, U = 1 & e | d[s[b]], t.writeByte(h[T], s[b])
    }, function() {
        var t = L;
        L = 128 & t | t >> 1, U = 1 & t | d[L]
    }, function() {
        U = s[w] >> 7, s[w] = s[w] << 1 | 1, U = d[s[w]]
    }, function() {
        U = s[v] >> 7, s[v] = s[v] << 1 | 1, U = d[s[v]]
    }, function() {
        U = s[l] >> 7, s[l] = s[l] << 1 | 1, U = d[s[l]]
    }, function() {
        U = s[g] >> 7, s[g] = s[g] << 1 | 1, U = d[s[g]]
    }, function() {
        U = s[p] >> 7, s[p] = s[p] << 1 | 1, U = d[s[p]]
    }, function() {
        U = s[m] >> 7, s[m] = s[m] << 1 | 1, U = d[s[m]]
    }, function() {
        s[b] = t.readByte(h[T]), o += 7, U = s[b] >> 7, s[b] = s[b] << 1 | 1, U = d[s[b]], t.writeByte(h[T], s[b])
    }, function() {
        U = L >> 7, L = 255 & (L << 1 | 1), U = d[L]
    }, function() {
        U = 1 & s[w], s[w] >>= 1, U |= d[s[w]]
    }, function() {
        U = 1 & s[v], s[v] >>= 1, U |= d[s[v]]
    }, function() {
        U = 1 & s[l], s[l] >>= 1, U |= d[s[l]]
    }, function() {
        U = 1 & s[g], s[g] >>= 1, U |= d[s[g]]
    }, function() {
        U = 1 & s[p], s[p] >>= 1, U |= d[s[p]]
    }, function() {
        U = 1 & s[m], s[m] >>= 1, U |= d[s[m]]
    }, function() {
        s[b] = t.readByte(h[T]), o += 7, U = 1 & s[b], s[b] >>= 1, U |= d[s[b]], t.writeByte(h[T], s[b])
    }, function() {
        U = 1 & L, L >>= 1, U |= d[L]
    }, function() {
        U = 1 & U | 40 & s[w] | ((1 & s[w]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[v] | ((1 & s[v]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[l] | ((1 & s[l]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[g] | ((1 & s[g]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[p] | ((1 & s[p]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[m] | ((1 & s[m]) > 0 ? 16 : 84)
    }, function() {
        s[b] = t.readByte(h[T]), o += 4, U = 1 & U | 40 & s[b] | ((1 & s[b]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & L | ((1 & L) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[w] | ((2 & s[w]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[v] | ((2 & s[v]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[l] | ((2 & s[l]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[g] | ((2 & s[g]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[p] | ((2 & s[p]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[m] | ((2 & s[m]) > 0 ? 16 : 84)
    }, function() {
        s[b] = t.readByte(h[T]), o += 4, U = 1 & U | 40 & s[b] | ((2 & s[b]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & L | ((2 & L) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[w] | ((4 & s[w]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[v] | ((4 & s[v]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[l] | ((4 & s[l]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[g] | ((4 & s[g]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[p] | ((4 & s[p]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[m] | ((4 & s[m]) > 0 ? 16 : 84)
    }, function() {
        s[b] = t.readByte(h[T]), o += 4, U = 1 & U | 40 & s[b] | ((4 & s[b]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & L | ((4 & L) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[w] | ((8 & s[w]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[v] | ((8 & s[v]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[l] | ((8 & s[l]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[g] | ((8 & s[g]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[p] | ((8 & s[p]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[m] | ((8 & s[m]) > 0 ? 16 : 84)
    }, function() {
        s[b] = t.readByte(h[T]), o += 4, U = 1 & U | 40 & s[b] | ((8 & s[b]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & L | ((8 & L) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[w] | ((16 & s[w]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[v] | ((16 & s[v]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[l] | ((16 & s[l]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[g] | ((16 & s[g]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[p] | ((16 & s[p]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[m] | ((16 & s[m]) > 0 ? 16 : 84)
    }, function() {
        s[b] = t.readByte(h[T]), o += 4, U = 1 & U | 40 & s[b] | ((16 & s[b]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & L | ((16 & L) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[w] | ((32 & s[w]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[v] | ((32 & s[v]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[l] | ((32 & s[l]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[g] | ((32 & s[g]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[p] | ((32 & s[p]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[m] | ((32 & s[m]) > 0 ? 16 : 84)
    }, function() {
        s[b] = t.readByte(h[T]), o += 4, U = 1 & U | 40 & s[b] | ((32 & s[b]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & L | ((32 & L) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[w] | ((64 & s[w]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[v] | ((64 & s[v]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[l] | ((64 & s[l]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[g] | ((64 & s[g]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[p] | ((64 & s[p]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[m] | ((64 & s[m]) > 0 ? 16 : 84)
    }, function() {
        s[b] = t.readByte(h[T]), o += 4, U = 1 & U | 40 & s[b] | ((64 & s[b]) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & L | ((64 & L) > 0 ? 16 : 84)
    }, function() {
        U = 1 & U | 40 & s[w] | ((128 & s[w]) > 0 ? 144 : 84)
    }, function() {
        U = 1 & U | 40 & s[v] | ((128 & s[v]) > 0 ? 144 : 84)
    }, function() {
        U = 1 & U | 40 & s[l] | ((128 & s[l]) > 0 ? 144 : 84)
    }, function() {
        U = 1 & U | 40 & s[g] | ((128 & s[g]) > 0 ? 144 : 84)
    }, function() {
        U = 1 & U | 40 & s[p] | ((128 & s[p]) > 0 ? 144 : 84)
    }, function() {
        U = 1 & U | 40 & s[m] | ((128 & s[m]) > 0 ? 144 : 84)
    }, function() {
        s[b] = t.readByte(h[T]), o += 4, U = 1 & U | 40 & s[b] | ((128 & s[b]) > 0 ? 144 : 84)
    }, function() {
        U = 1 & U | 40 & L | ((128 & L) > 0 ? 144 : 84)
    }, function() {
        s[w] &= 254
    }, function() {
        s[v] &= 254
    }, function() {
        s[l] &= 254
    }, function() {
        s[g] &= 254
    }, function() {
        s[p] &= 254
    }, function() {
        s[m] &= 254
    }, function() {
        o += 7, t.writeByte(h[T], 254 & t.readByte(h[T]))
    }, function() {
        L &= 254
    }, function() {
        s[w] &= 253
    }, function() {
        s[v] &= 253
    }, function() {
        s[l] &= 253
    }, function() {
        s[g] &= 253
    }, function() {
        s[p] &= 253
    }, function() {
        s[m] &= 253
    }, function() {
        o += 7, t.writeByte(h[T], 253 & t.readByte(h[T]))
    }, function() {
        L &= 253
    }, function() {
        s[w] &= 251
    }, function() {
        s[v] &= 251
    }, function() {
        s[l] &= 251
    }, function() {
        s[g] &= 251
    }, function() {
        s[p] &= 251
    }, function() {
        s[m] &= 251
    }, function() {
        o += 7, t.writeByte(h[T], 251 & t.readByte(h[T]))
    }, function() {
        L &= 251
    }, function() {
        s[w] &= 247
    }, function() {
        s[v] &= 247
    }, function() {
        s[l] &= 247
    }, function() {
        s[g] &= 247
    }, function() {
        s[p] &= 247
    }, function() {
        s[m] &= 247
    }, function() {
        o += 7, t.writeByte(h[T], 247 & t.readByte(h[T]))
    }, function() {
        L &= 247
    }, function() {
        s[w] &= 239
    }, function() {
        s[v] &= 239
    }, function() {
        s[l] &= 239
    }, function() {
        s[g] &= 239
    }, function() {
        s[p] &= 239
    }, function() {
        s[m] &= 239
    }, function() {
        o += 7, t.writeByte(h[T], 239 & t.readByte(h[T]))
    }, function() {
        L &= 239
    }, function() {
        s[w] &= 223
    }, function() {
        s[v] &= 223
    }, function() {
        s[l] &= 223
    }, function() {
        s[g] &= 223
    }, function() {
        s[p] &= 223
    }, function() {
        s[m] &= 223
    }, function() {
        o += 7, t.writeByte(h[T], 223 & t.readByte(h[T]))
    }, function() {
        L &= 223
    }, function() {
        s[w] &= 191;
    }, function() {
        s[v] &= 191
    }, function() {
        s[l] &= 191
    }, function() {
        s[g] &= 191
    }, function() {
        s[p] &= 191
    }, function() {
        s[m] &= 191
    }, function() {
        o += 7, t.writeByte(h[T], 191 & t.readByte(h[T]))
    }, function() {
        L &= 191
    }, function() {
        s[w] &= 127
    }, function() {
        s[v] &= 127
    }, function() {
        s[l] &= 127
    }, function() {
        s[g] &= 127
    }, function() {
        s[p] &= 127
    }, function() {
        s[m] &= 127
    }, function() {
        o += 7, t.writeByte(h[T], 127 & t.readByte(h[T]))
    }, function() {
        L &= 127
    }, function() {
        s[w] |= 1
    }, function() {
        s[v] |= 1
    }, function() {
        s[l] |= 1
    }, function() {
        s[g] |= 1
    }, function() {
        s[p] |= 1
    }, function() {
        s[m] |= 1
    }, function() {
        o += 7, t.writeByte(h[T], 1 | t.readByte(h[T]))
    }, function() {
        L |= 1
    }, function() {
        s[w] |= 2
    }, function() {
        s[v] |= 2
    }, function() {
        s[l] |= 2
    }, function() {
        s[g] |= 2
    }, function() {
        s[p] |= 2
    }, function() {
        s[m] |= 2
    }, function() {
        o += 7, t.writeByte(h[T], 2 | t.readByte(h[T]))
    }, function() {
        L |= 2
    }, function() {
        s[w] |= 4
    }, function() {
        s[v] |= 4
    }, function() {
        s[l] |= 4
    }, function() {
        s[g] |= 4
    }, function() {
        s[p] |= 4
    }, function() {
        s[m] |= 4
    }, function() {
        o += 7, t.writeByte(h[T], 4 | t.readByte(h[T]))
    }, function() {
        L |= 4
    }, function() {
        s[w] |= 8
    }, function() {
        s[v] |= 8
    }, function() {
        s[l] |= 8
    }, function() {
        s[g] |= 8
    }, function() {
        s[p] |= 8
    }, function() {
        s[m] |= 8
    }, function() {
        o += 7, t.writeByte(h[T], 8 | t.readByte(h[T]))
    }, function() {
        L |= 8
    }, function() {
        s[w] |= 16
    }, function() {
        s[v] |= 16
    }, function() {
        s[l] |= 16
    }, function() {
        s[g] |= 16
    }, function() {
        s[p] |= 16
    }, function() {
        s[m] |= 16
    }, function() {
        o += 7, t.writeByte(h[T], 16 | t.readByte(h[T]))
    }, function() {
        L |= 16
    }, function() {
        s[w] |= 32
    }, function() {
        s[v] |= 32
    }, function() {
        s[l] |= 32
    }, function() {
        s[g] |= 32
    }, function() {
        s[p] |= 32
    }, function() {
        s[m] |= 32
    }, function() {
        o += 7, t.writeByte(h[T], 32 | t.readByte(h[T]))
    }, function() {
        L |= 32
    }, function() {
        s[w] |= 64
    }, function() {
        s[v] |= 64
    }, function() {
        s[l] |= 64
    }, function() {
        s[g] |= 64
    }, function() {
        s[p] |= 64
    }, function() {
        s[m] |= 64
    }, function() {
        o += 7, t.writeByte(h[T], 64 | t.readByte(h[T]))
    }, function() {
        L |= 64
    }, function() {
        s[w] |= 128
    }, function() {
        s[v] |= 128
    }, function() {
        s[l] |= 128
    }, function() {
        s[g] |= 128
    }, function() {
        s[p] |= 128
    }, function() {
        s[m] |= 128
    }, function() {
        o += 7, t.writeByte(h[T], 128 | t.readByte(h[T]))
    }, function() {
        L |= 128
    }];
    var J, q, Y, W = [n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, function() {
            o += 1;
            var e = h[C];
            o += 3, s[w] = t.readPort(e), U = 1 & U | d[s[w]]
        }, function() {
            o += 1, o += 3, t.writePort(h[C], s[w])
        }, function() {
            o += 7;
            var t = h[T] - h[C] - (1 & U),
                e = (34816 & h[T]) >> 11 | (34816 & h[C]) >> 10 | (34816 & t) >> 9;
            h[T] = t, U = 2 | ((65536 & t) > 0 ? 1 : 0) | f[e >> 4] | 168 & s[p] | c[7 & e] | (h[T] > 0 ? 0 : 64)
        }, function() {
            o += 12;
            var e = t.readByte(E++);
            e |= t.readByte(E++) << 8, t.writeByte(e++, 255 & h[C]), t.writeByte(e, h[C] >> 8)
        }, function() {
            var t = L;
            L = 0;
            var e = L - t,
                n = (136 & L) >> 3 | (136 & t) >> 2 | (136 & e) >> 1;
            L = 255 & e, U = 2 | ((256 & e) > 0 ? 1 : 0) | c[7 & n] | f[n >> 4] | y[L]
        }, function() {
            K = V, o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8)
        }, function() {
            H = 0
        }, function() {
            o += 1, X = L
        }, function() {
            o += 1;
            var e = h[C];
            o += 3, s[v] = t.readPort(e), U = 1 & U | d[s[v]]
        }, function() {
            o += 1, o += 3, t.writePort(h[C], s[v])
        }, function() {
            o += 7;
            var t = h[T] + h[C] + (1 & U),
                e = (34816 & h[T]) >> 11 | (34816 & h[C]) >> 10 | (34816 & t) >> 9;
            h[T] = t, U = ((65536 & t) > 0 ? 1 : 0) | u[e >> 4] | 168 & s[p] | a[7 & e] | (0 == h[T] ? 0 : 64)
        }, function() {
            o += 12;
            var e = t.readByte(E++);
            e |= t.readByte(E++) << 8, h[C] = t.readByte(e++) + (t.readByte(e) << 8)
        }, function() {
            var t = L;
            L = 0;
            var e = L - t,
                n = (136 & L) >> 3 | (136 & t) >> 2 | (136 & e) >> 1;
            L = 255 & e, U = 2 | ((256 & e) > 0 ? 1 : 0) | c[7 & n] | f[n >> 4] | y[L]
        }, function() {
            K = V, o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8)
        }, function() {
            H = 0
        }, function() {
            o += 1, D = _ = L
        }, function() {
            o += 1;
            var e = h[C];
            o += 3, s[l] = t.readPort(e), U = 1 & U | d[s[l]]
        }, function() {
            o += 1, o += 3, t.writePort(h[C], s[l])
        }, function() {
            o += 7;
            var t = h[T] - h[N] - (1 & U),
                e = (34816 & h[T]) >> 11 | (34816 & h[N]) >> 10 | (34816 & t) >> 9;
            h[T] = t, U = 2 | ((65536 & t) > 0 ? 1 : 0) | f[e >> 4] | 168 & s[p] | c[7 & e] | (h[T] > 0 ? 0 : 64)
        }, function() {
            o += 12;
            var e = t.readByte(E++);
            e |= t.readByte(E++) << 8, t.writeByte(e++, 255 & h[N]), t.writeByte(e, h[N] >> 8)
        }, function() {
            var t = L;
            L = 0;
            var e = L - t,
                n = (136 & L) >> 3 | (136 & t) >> 2 | (136 & e) >> 1;
            L = 255 & e, U = 2 | ((256 & e) > 0 ? 1 : 0) | c[7 & n] | f[n >> 4] | y[L]
        }, function() {
            K = V, o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8)
        }, function() {
            H = 1
        }, function() {
            o += 1, L = X, U = 1 & U | y[L] | (0 != V ? 4 : 0)
        }, function() {
            o += 1;
            var e = h[C];
            o += 3, s[g] = t.readPort(e), U = 1 & U | d[s[g]]
        }, function() {
            o += 1, o += 3, t.writePort(h[C], s[g])
        }, function() {
            o += 7;
            var t = h[T] + h[N] + (1 & U),
                e = (34816 & h[T]) >> 11 | (34816 & h[N]) >> 10 | (34816 & t) >> 9;
            h[T] = t, U = ((65536 & t) > 0 ? 1 : 0) | u[e >> 4] | 168 & s[p] | a[7 & e] | (0 == h[T] ? 0 : 64)
        }, function() {
            o += 12;
            var e = t.readByte(E++);
            e |= t.readByte(E++) << 8, h[N] = t.readByte(e++) + (t.readByte(e) << 8)
        }, function() {
            var t = L;
            L = 0;
            var e = L - t,
                n = (136 & L) >> 3 | (136 & t) >> 2 | (136 & e) >> 1;
            L = 255 & e, U = 2 | ((256 & e) > 0 ? 1 : 0) | c[7 & n] | f[n >> 4] | y[L]
        }, function() {
            K = V, o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8)
        }, function() {
            H = 2
        }, function() {
            o += 1, L = 127 & D | 128 & _, U = 1 & U | y[L] | (0 != V ? 4 : 0)
        }, function() {
            o += 1;
            var e = h[C];
            o += 3, s[p] = t.readPort(e), U = 1 & U | d[s[p]]
        }, function() {
            o += 1, o += 3, t.writePort(h[C], s[p])
        }, function() {
            o += 7;
            var t = h[T] - h[T] - (1 & U),
                e = (34816 & h[T]) >> 11 | (34816 & h[T]) >> 10 | (34816 & t) >> 9;
            h[T] = t, U = 2 | ((65536 & t) > 0 ? 1 : 0) | f[e >> 4] | 168 & s[p] | c[7 & e] | (h[T] > 0 ? 0 : 64)
        }, function() {
            o += 12;
            var e = t.readByte(E++);
            e |= t.readByte(E++) << 8, t.writeByte(e++, 255 & h[T]), t.writeByte(e, h[T] >> 8)
        }, function() {
            var t = L;
            L = 0;
            var e = L - t,
                n = (136 & L) >> 3 | (136 & t) >> 2 | (136 & e) >> 1;
            L = 255 & e, U = 2 | ((256 & e) > 0 ? 1 : 0) | c[7 & n] | f[n >> 4] | y[L]
        }, function() {
            K = V, o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8)
        }, function() {
            H = 0
        }, function() {
            var e = t.readByte(h[T]);
            o += 10, t.writeByte(h[T], L << 4 | e >> 4), L = 240 & L | 15 & e, U = 1 & U | d[L]
        }, function() {
            o += 1;
            var e = h[C];
            o += 3, s[m] = t.readPort(e), U = 1 & U | d[s[m]]
        }, function() {
            o += 1, o += 3, t.writePort(h[C], s[m])
        }, function() {
            o += 7;
            var t = h[T] + h[T] + (1 & U),
                e = (34816 & h[T]) >> 11 | (34816 & h[T]) >> 10 | (34816 & t) >> 9;
            h[T] = t, U = ((65536 & t) > 0 ? 1 : 0) | u[e >> 4] | 168 & s[p] | a[7 & e] | (0 == h[T] ? 0 : 64)
        }, function() {
            o += 12;
            var e = t.readByte(E++);
            e |= t.readByte(E++) << 8, h[T] = t.readByte(e++) + (t.readByte(e) << 8)
        }, function() {
            var t = L;
            L = 0;
            var e = L - t,
                n = (136 & L) >> 3 | (136 & t) >> 2 | (136 & e) >> 1;
            L = 255 & e, U = 2 | ((256 & e) > 0 ? 1 : 0) | c[7 & n] | f[n >> 4] | y[L]
        }, function() {
            K = V, o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8)
        }, function() {
            H = 0
        }, function() {
            var e = t.readByte(h[T]);
            o += 10, t.writeByte(h[T], e << 4 | 15 & L), L = 240 & L | e >> 4, U = 1 & U | d[L]
        }, function() {
            o += 1;
            var e = h[C];
            o += 3, s[b] = t.readPort(e), U = 1 & U | d[s[b]]
        }, function() {
            o += 4, t.writePort(h[C], 0)
        }, function() {
            o += 7;
            var t = h[T] - z - (1 & U),
                e = (34816 & h[T]) >> 11 | (34816 & z) >> 10 | (34816 & t) >> 9;
            h[T] = t, U = 2 | ((65536 & t) > 0 ? 1 : 0) | f[e >> 4] | 168 & s[p] | c[7 & e] | (h[T] > 0 ? 0 : 64)
        }, function() {
            o += 12;
            var e = t.readByte(E++);
            e |= t.readByte(E++) << 8, t.writeByte(e++, 255 & z), t.writeByte(e, z >> 8)
        }, function() {
            var t = L;
            L = 0;
            var e = L - t,
                n = (136 & L) >> 3 | (136 & t) >> 2 | (136 & e) >> 1;
            L = 255 & e, U = 2 | ((256 & e) > 0 ? 1 : 0) | c[7 & n] | f[n >> 4] | y[L]
        }, function() {
            K = V, o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8)
        }, function() {
            H = 1
        }, n, function() {
            o += 4, L = t.readPort(h[C]), U = 1 & U | d[L]
        }, function() {
            o += 4, t.writePort(h[C], L)
        }, function() {
            o += 7;
            var t = h[T] + z + (1 & U),
                e = (34816 & h[T]) >> 11 | (34816 & z) >> 10 | (34816 & t) >> 9;
            h[T] = t, U = ((65536 & t) > 0 ? 1 : 0) | u[e >> 4] | 168 & s[p] | a[7 & e] | (0 == h[T] ? 0 : 64)
        }, function() {
            o += 12;
            var e = t.readByte(E++);
            e |= t.readByte(E++) << 8, z = t.readByte(e++) + (t.readByte(e) << 8)
        }, function() {
            var t = L;
            L = 0;
            var e = L - t,
                n = (136 & L) >> 3 | (136 & t) >> 2 | (136 & e) >> 1;
            L = 255 & e, U = 2 | ((256 & e) > 0 ? 1 : 0) | c[7 & n] | f[n >> 4] | y[L]
        }, function() {
            K = V, o += 6, E = t.readByte(z++) + (t.readByte(z++) << 8)
        }, function() {
            H = 2
        }, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, function() {
            var e = t.readByte(h[T]);
            o += 8, h[C]--, t.writeByte(h[N], e), h[N]++, h[T]++, e += L, U = 193 & U | (0 != h[C] ? 4 : 0) | 8 & e | (0 != (2 & e) ? 32 : 0)
        }, function() {
            var e = t.readByte(h[T]),
                n = L - e,
                r = (8 & L) >> 3 | (8 & e) >> 2 | (8 & n) >> 1;
            o += 8, h[T]++, h[C]--, U = 1 & U | (0 != h[C] ? 6 : 2) | c[r] | (0 != n ? 0 : 64) | 128 & n, 0 != (16 & U) && n--, U |= 8 & n | (0 != (2 & n) ? 32 : 0)
        }, function() {
            var e = t.readPort(h[C]);
            o += 8, t.writeByte(h[T], e), s[w]--, h[T]++, U = (0 != (128 & e) ? 2 : 0) | y[s[w]]
        }, function() {
            var e = t.readByte(h[T]);
            s[w]--, o += 8, h[T]++, t.writePort(h[C], e), U = (0 != (128 & e) ? 2 : 0) | y[s[w]]
        }, n, n, n, n, function() {
            var e = t.readByte(h[T]);
            o += 8, h[C]--, t.writeByte(h[N], e), h[N]--, h[T]--, e += L, U = 193 & U | (0 != h[C] ? 4 : 0) | 8 & e | (0 != (2 & e) ? 32 : 0)
        }, function() {
            var e = t.readByte(h[T]),
                n = L - e,
                r = (8 & L) >> 3 | (8 & e) >> 2 | (8 & n) >> 1;
            o += 8, h[T]--, h[C]--, U = 1 & U | (0 != h[C] ? 6 : 2) | c[r] | (0 != n ? 0 : 64) | 128 & n, 0 != (16 & U) && n--, U |= 8 & n | (0 != (2 & n) ? 32 : 0)
        }, function() {
            var e = t.readPort(h[C]);
            o += 8, t.writeByte(h[T], e), s[w]--, h[T]--, U = (0 != (128 & e) ? 2 : 0) | y[s[w]]
        }, function() {
            var e = t.readByte(h[T]);
            s[w]--, o += 8, h[T]--, t.writePort(h[C], e), U = (0 != (128 & e) ? 2 : 0) | y[s[w]]
        }, n, n, n, n, function() {
            var e = t.readByte(h[T]);
            o += 8, t.writeByte(h[N], e), h[T]++, h[N]++, h[C]--, e += L, U = 193 & U | (0 != h[C] ? 4 : 0) | 8 & e | (0 != (2 & e) ? 32 : 0), 0 != h[C] && (o += 5, E -= 2)
        }, function() {
            var e = t.readByte(h[T]),
                n = L - e,
                r = (8 & L) >> 3 | (8 & e) >> 2 | (8 & n) >> 1;
            o += 8, h[T]++, h[C]--, U = 1 & U | (0 != h[C] ? 6 : 2) | c[r] | (0 != n ? 0 : 64) | 128 & n, 0 != (16 & U) && n--, U |= 8 & n | (0 != (2 & n) ? 32 : 0), 4 == (68 & U) && (o += 5, E -= 2)
        }, function() {
            var e = t.readPort(h[C]);
            o += 8, t.writeByte(h[T], e), s[w]--, h[T]++, U = (0 != (128 & e) ? 2 : 0) | y[s[w]], 0 != s[w] && (o += 5, E -= 2)
        }, function() {
            var e = t.readByte(h[T]);
            o += 5, s[w]--, h[T]++, t.writePort(h[C], e), U = (0 != (128 & e) ? 2 : 0) | y[s[w]], 0 != s[w] ? (o += 8, E -= 2) : o += 3
        }, n, n, n, n, function() {
            var e = t.readByte(h[T]);
            o += 8, t.writeByte(h[N], e), h[T]--, h[N]--, h[C]--, e += L, U = 193 & U | (0 != h[C] ? 4 : 0) | 8 & e | ((2 & e) > 0 ? 32 : 0), 0 != h[C] && (o += 5, E -= 2)
        }, function() {
            var e = t.readByte(h[T]),
                n = L - e,
                r = (8 & L) >> 3 | (8 & e) >> 2 | (8 & n) >> 1;
            o += 8, h[T]--, h[C]--, U = 1 & U | (0 != h[C] ? 6 : 2) | c[r] | (0 != n ? 0 : 64) | 128 & n, 0 != (16 & U) && n--, U |= 8 & n | (0 != (2 & n) ? 32 : 0), 4 == (68 & U) && (o += 5, E -= 2)
        }, function() {
            var e = t.readPort(h[C]);
            o += 8, t.writeByte(h[T], e), s[w]--, h[T]--, U = (0 != (128 & e) ? 2 : 0) | y[s[w]], 0 != s[w] && (o += 5, E -= 2)
        }, function() {
            var e = t.readByte(h[T]);
            o += 5, s[w]--, h[T]--, t.writePort(h[C], e), U = (0 != (128 & e) ? 2 : 0) | y[s[w]], 0 != s[w] ? (o += 8, E -= 2) : o += 3
        }, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
        j = [r, r, r, r, r, r, r, r, r, function() {
            var t = h[J] + h[C],
                e = (2048 & h[J]) >> 11 | (2048 & h[C]) >> 10 | (2048 & t) >> 9;
            o += 7, h[J] = t, U = 196 & U | ((65536 & t) > 0 ? 1 : 0) | t >> 8 & 40 | a[e]
        }, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, function() {
            var t = h[J] + h[N],
                e = (2048 & h[J]) >> 11 | (2048 & h[N]) >> 10 | (2048 & t) >> 9;
            o += 7, h[J] = t, U = 196 & U | ((65536 & t) > 0 ? 1 : 0) | t >> 8 & 40 | a[e]
        }, r, r, r, r, r, r, r, function() {
            o += 6, s[Y] = t.readByte(E++), s[q] = t.readByte(E++)
        }, function() {
            o += 12;
            var e = t.readByte(E++);
            e |= t.readByte(E++) << 8, t.writeByte(e++, 255 & h[J]), t.writeByte(e, h[J] >> 8)
        }, function() {
            o += 2, h[J]++
        }, function() {
            s[q]++, U = 1 & U | (128 == s[q] ? 4 : 0) | ((15 & s[q]) > 0 ? 0 : 16) | y[s[q]]
        }, function() {
            U = 1 & U | ((15 & s[q]) > 0 ? 0 : 16) | 2, s[q]--, U |= (127 == s[q] ? 4 : 0) | y[s[q]]
        }, function() {
            o += 3, s[q] = t.readByte(E++)
        }, r, r, function() {
            var t = h[J] + h[J],
                e = (2048 & h[J]) >> 11 | (2048 & h[J]) >> 10 | (2048 & t) >> 9;
            o += 7, h[J] = t, U = 196 & U | ((65536 & t) > 0 ? 1 : 0) | t >> 8 & 40 | a[e]
        }, function() {
            o += 12;
            var e = t.readByte(E++);
            e |= t.readByte(E++) << 8, h[J] = t.readByte(e++) + (t.readByte(e) << 8)
        }, function() {
            o += 2, h[J]--
        }, function() {
            s[Y]++, U = 1 & U | (128 == s[Y] ? 4 : 0) | ((15 & s[Y]) > 0 ? 0 : 16) | y[s[Y]]
        }, function() {
            U = 1 & U | ((15 & s[Y]) > 0 ? 0 : 16) | 2, s[Y]--, U |= (127 == s[Y] ? 4 : 0) | y[s[Y]]
        }, function() {
            o += 3, s[Y] = t.readByte(E++)
        }, r, r, r, r, r, function() {
            o += 15;
            var e = t.readByte(E++),
                n = h[J] + (128 > e ? e : e - 256);
            s[b] = t.readByte(n), s[b]++, U = 1 & U | (128 == s[b] ? 4 : 0) | ((15 & s[b]) > 0 ? 0 : 16) | y[s[b]], t.writeByte(n, s[b])
        }, function() {
            o += 15;
            var e = t.readByte(E++),
                n = h[J] + (128 > e ? e : e - 256);
            s[b] = t.readByte(n), U = 1 & U | ((15 & s[b]) > 0 ? 0 : 16) | 2, s[b]--, U |= (127 == s[b] ? 4 : 0) | y[s[b]], t.writeByte(n, s[b])
        }, function() {
            o += 11;
            var e = t.readByte(E++),
                n = h[J] + (128 > e ? e : e - 256);
            t.writeByte(n, t.readByte(E++))
        }, r, r, function() {
            var t = h[J] + z,
                e = (2048 & h[J]) >> 11 | (2048 & z) >> 10 | (2048 & t) >> 9;
            o += 7, h[J] = t, U = 196 & U | ((65536 & t) > 0 ? 1 : 0) | t >> 8 & 40 | a[e]
        }, r, r, r, r, r, r, r, r, r, r, function() {
            s[w] = s[q]
        }, function() {
            s[w] = s[Y]
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            s[w] = t.readByte(h[J] + (128 > e ? e : e - 256))
        }, r, r, r, r, r, function() {
            s[v] = s[q]
        }, function() {
            s[v] = s[Y]
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            s[v] = t.readByte(h[J] + (128 > e ? e : e - 256))
        }, r, r, r, r, r, function() {
            s[l] = s[q]
        }, function() {
            s[l] = s[Y]
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            s[l] = t.readByte(h[J] + (128 > e ? e : e - 256))
        }, r, r, r, r, r, function() {
            s[g] = s[q]
        }, function() {
            s[g] = s[Y]
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            s[g] = t.readByte(h[J] + (128 > e ? e : e - 256))
        }, r, function() {
            s[q] = s[w]
        }, function() {
            s[q] = s[v]
        }, function() {
            s[q] = s[l]
        }, function() {
            s[q] = s[g]
        }, function() {}, function() {
            s[q] = s[Y]
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            s[p] = t.readByte(h[J] + (128 > e ? e : e - 256))
        }, function() {
            s[q] = L
        }, function() {
            s[Y] = s[w]
        }, function() {
            s[Y] = s[v]
        }, function() {
            s[Y] = s[l]
        }, function() {
            s[Y] = s[g]
        }, function() {
            s[Y] = s[q]
        }, function() {}, function() {
            o += 11;
            var e = t.readByte(E++);
            s[m] = t.readByte(h[J] + (128 > e ? e : e - 256))
        }, function() {
            s[Y] = L
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            t.writeByte(h[J] + (128 > e ? e : e - 256), s[w])
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            t.writeByte(h[J] + (128 > e ? e : e - 256), s[v])
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            t.writeByte(h[J] + (128 > e ? e : e - 256), s[l])
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            t.writeByte(h[J] + (128 > e ? e : e - 256), s[g])
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            t.writeByte(h[J] + (128 > e ? e : e - 256), s[p])
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            t.writeByte(h[J] + (128 > e ? e : e - 256), s[m])
        }, r, function() {
            o += 11;
            var e = t.readByte(E++);
            t.writeByte(h[J] + (128 > e ? e : e - 256), L)
        }, r, r, r, r, function() {
            L = s[q]
        }, function() {
            L = s[Y]
        }, function() {
            o += 11;
            var e = t.readByte(E++);
            L = t.readByte(h[J] + (128 > e ? e : e - 256))
        }, r, r, r, r, r, function() {
            var t = L + s[q],
                e = (136 & L) >> 3 | (136 & s[q]) >> 2 | (136 & t) >> 1;
            L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
        }, function() {
            var t = L + s[Y],
                e = (136 & L) >> 3 | (136 & s[Y]) >> 2 | (136 & t) >> 1;
            L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
        }, function() {
            o += 11;
            var e = t.readByte(E++),
                n = t.readByte(h[J] + (128 > e ? e : e - 256)),
                r = L + n,
                i = (136 & L) >> 3 | (136 & n) >> 2 | (136 & r) >> 1;
            L = 255 & r, U = ((256 & r) > 0 ? 1 : 0) | a[7 & i] | u[i >> 4] | y[L]
        }, r, r, r, r, r, function() {
            var t = L + s[q] + (1 & U),
                e = (136 & L) >> 3 | (136 & s[q]) >> 2 | (136 & t) >> 1;
            L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
        }, function() {
            var t = L + s[Y] + (1 & U),
                e = (136 & L) >> 3 | (136 & s[Y]) >> 2 | (136 & t) >> 1;
            L = 255 & t, U = ((256 & t) > 0 ? 1 : 0) | a[7 & e] | u[e >> 4] | y[L]
        }, function() {
            o += 11;
            var e = t.readByte(E++),
                n = t.readByte(h[J] + (128 > e ? e : e - 256)),
                r = L + n + (1 & U),
                i = (136 & L) >> 3 | (136 & n) >> 2 | (136 & r) >> 1;
            L = 255 & r, U = ((256 & r) > 0 ? 1 : 0) | a[7 & i] | u[i >> 4] | y[L]
        }, r, r, r, r, r, function() {
            var t = L - s[q],
                e = (136 & L) >> 3 | (136 & s[q]) >> 2 | (136 & t) >> 1;
            L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
        }, function() {
            var t = L - s[Y],
                e = (136 & L) >> 3 | (136 & s[Y]) >> 2 | (136 & t) >> 1;
            L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
        }, function() {
            o += 11;
            var e = t.readByte(E++),
                n = t.readByte(h[J] + (128 > e ? e : e - 256)),
                r = L - n,
                i = (136 & L) >> 3 | (136 & n) >> 2 | (136 & r) >> 1;
            L = 255 & r, U = 2 | ((256 & r) > 0 ? 1 : 0) | c[7 & i] | f[i >> 4] | y[L]
        }, r, r, r, r, r, function() {
            var t = L - s[q] - (1 & U),
                e = (136 & L) >> 3 | (136 & s[q]) >> 2 | (136 & t) >> 1;
            L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
        }, function() {
            var t = L - s[Y] - (1 & U),
                e = (136 & L) >> 3 | (136 & s[Y]) >> 2 | (136 & t) >> 1;
            L = 255 & t, U = 2 | ((256 & t) > 0 ? 1 : 0) | c[7 & e] | f[e >> 4] | y[L]
        }, function() {
            o += 11;
            var e = t.readByte(E++),
                n = t.readByte(h[J] + (128 > e ? e : e - 256)),
                r = L - n - (1 & U),
                i = (136 & L) >> 3 | (136 & n) >> 2 | (136 & r) >> 1;
            L = 255 & r, U = 2 | ((256 & r) > 0 ? 1 : 0) | c[7 & i] | f[i >> 4] | y[L]
        }, r, r, r, r, r, function() {
            L &= s[q], U = 16 | d[L]
        }, function() {
            L &= s[Y], U = 16 | d[L]
        }, function() {
            o += 11;
            var e = t.readByte(E++),
                n = t.readByte(h[J] + (128 > e ? e : e - 256));
            L &= n, U = 16 | d[L]
        }, r, r, r, r, r, function() {
            L ^= s[q], U = d[L]
        }, function() {
            L ^= s[Y], U = d[L]
        }, function() {
            o += 11;
            var e = t.readByte(E++),
                n = t.readByte(h[J] + (128 > e ? e : e - 256));
            L ^= n, U = d[L]
        }, r, r, r, r, r, function() {
            L |= s[q], U = d[L]
        }, function() {
            L |= s[Y], U = d[L]
        }, function() {
            o += 11;
            var e = t.readByte(E++),
                n = t.readByte(h[J] + (128 > e ? e : e - 256));
            L |= n, U = d[L]
        }, r, r, r, r, r, function() {
            var t = L - s[q],
                e = (136 & L) >> 3 | (136 & s[q]) >> 2 | (136 & t) >> 1;
            U = 2 | ((256 & t) > 0 ? 1 : t > 0 ? 0 : 64) | c[7 & e] | f[e >> 4] | 40 & s[q] | 128 & t
        }, function() {
            var t = L - s[Y],
                e = (136 & L) >> 3 | (136 & s[Y]) >> 2 | (136 & t) >> 1;
            U = 2 | ((256 & t) > 0 ? 1 : t > 0 ? 0 : 64) | c[7 & e] | f[e >> 4] | 40 & s[Y] | 128 & t
        }, function() {
            o += 11;
            var e = t.readByte(E++),
                n = t.readByte(h[J] + (128 > e ? e : e - 256)),
                r = L - n,
                i = (136 & L) >> 3 | (136 & n) >> 2 | (136 & r) >> 1;
            U = 2 | ((256 & r) > 0 ? 1 : r > 0 ? 0 : 64) | c[7 & i] | f[i >> 4] | 40 & n | 128 & r
        }, r, r, r, r, r, r, r, r, r, r, r, r, function() {
            o += 7;
            var e = t.readByte(E++),
                n = h[J] + (128 > e ? e : e - 256),
                r = t.opcodeFetch(E++);
            Q[r](n)
        }, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, function() {
            o += 6, s[Y] = t.readByte(z++), s[q] = t.readByte(z++)
        }, r, function() {
            var e = t.readByte(z),
                n = t.readByte(z + 1);
            o += 15, t.writeByte(z, s[Y]), t.writeByte(z + 1, s[q]), s[Y] = e, s[q] = n
        }, r, function() {
            o++, z--, o += 6, t.writeByte(z, s[q]), z--, t.writeByte(z, s[Y])
        }, r, r, r, function() {
            E = h[J]
        }, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, function() {
            o += 2, z = h[J]
        }, r, r, r, r, r, r],
        Q = [function(e) {
            o += 8, s[w] = t.readByte(e);
            var n = s[w];
            s[w] = n << 1 | n >> 7, U = 1 & s[w] | d[s[w]], t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = t.readByte(e);
            var n = s[v];
            s[v] = n << 1 | n >> 7, U = 1 & s[v] | d[s[v]], t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = t.readByte(e);
            var n = s[l];
            s[l] = n << 1 | n >> 7, U = 1 & s[l] | d[s[l]], t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = t.readByte(e);
            var n = s[g];
            s[g] = n << 1 | n >> 7, U = 1 & s[g] | d[s[g]], t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = t.readByte(e);
            var n = s[p];
            s[p] = n << 1 | n >> 7, U = 1 & s[p] | d[s[p]], t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = t.readByte(e);
            var n = s[m];
            s[m] = n << 1 | n >> 7, U = 1 & s[m] | d[s[m]], t.writeByte(e, s[m])
        }, function(e) {
            o += 8, s[b] = t.readByte(e);
            var n = s[b];
            s[b] = n << 1 | n >> 7, U = 1 & s[b] | d[s[b]], t.writeByte(e, s[b])
        }, function(e) {
            o += 8;
            var n = t.readByte(e);
            L = 255 & (n << 1 | n >> 7), U = 1 & L | d[L], t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = t.readByte(e);
            var n = s[w];
            s[w] = n >> 1 | n << 7, U = 1 & n | d[s[w]], t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = t.readByte(e);
            var n = s[v];
            s[v] = n >> 1 | n << 7, U = 1 & n | d[s[v]], t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = t.readByte(e);
            var n = s[l];
            s[l] = n >> 1 | n << 7, U = 1 & n | d[s[l]], t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = t.readByte(e);
            var n = s[g];
            s[g] = n >> 1 | n << 7, U = 1 & n | d[s[g]], t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = t.readByte(e);
            var n = s[p];
            s[p] = n >> 1 | n << 7, U = 1 & n | d[s[p]], t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = t.readByte(e);
            var n = s[m];
            s[m] = n >> 1 | n << 7, U = 1 & n | d[s[m]], t.writeByte(e, s[m])
        }, function(e) {
            o += 8, s[b] = t.readByte(e);
            var n = s[b];
            s[b] = n >> 1 | n << 7, U = 1 & n | d[s[b]], t.writeByte(e, s[b])
        }, function(e) {
            o += 8, L = t.readByte(e);
            var n = L;
            L = 255 & (L >> 1 | L << 7), U = 1 & n | d[L], t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = t.readByte(e);
            var n = s[w];
            s[w] = n << 1 | 1 & U, U = n >> 7 | d[s[w]], t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = t.readByte(e);
            var n = s[v];
            s[v] = n << 1 | 1 & U, U = n >> 7 | d[s[v]], t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = t.readByte(e);
            var n = s[l];
            s[l] = n << 1 | 1 & U, U = n >> 7 | d[s[l]], t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = t.readByte(e);
            var n = s[g];
            s[g] = n << 1 | 1 & U, U = n >> 7 | d[s[g]], t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = t.readByte(e);
            var n = s[p];
            s[p] = n << 1 | 1 & U, U = n >> 7 | d[s[p]], t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = t.readByte(e);
            var n = s[m];
            s[m] = n << 1 | 1 & U, U = n >> 7 | d[s[m]], t.writeByte(e, s[m])
        }, function(e) {
            o += 8, s[b] = t.readByte(e);
            var n = s[b];
            s[b] = n << 1 | 1 & U, U = n >> 7 | d[s[b]], t.writeByte(e, s[b])
        }, function(e) {
            o += 8;
            var n = t.readByte(e);
            L = 255 & (n << 1 | 1 & U), U = n >> 7 | d[L], t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = t.readByte(e);
            var n = s[w];
            s[w] = n >> 1 | U << 7, U = 1 & n | d[s[w]], t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = t.readByte(e);
            var n = s[v];
            s[v] = n >> 1 | U << 7, U = 1 & n | d[s[v]], t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = t.readByte(e);
            var n = s[l];
            s[l] = n >> 1 | U << 7, U = 1 & n | d[s[l]], t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = t.readByte(e);
            var n = s[g];
            s[g] = n >> 1 | U << 7, U = 1 & n | d[s[g]], t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = t.readByte(e);
            var n = s[p];
            s[p] = n >> 1 | U << 7, U = 1 & n | d[s[p]], t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = t.readByte(e);
            var n = s[m];
            s[m] = n >> 1 | U << 7, U = 1 & n | d[s[m]], t.writeByte(e, s[m])
        }, function(e) {
            o += 8, s[b] = t.readByte(e);
            var n = s[b];
            s[b] = n >> 1 | U << 7, U = 1 & n | d[s[b]], t.writeByte(e, s[b])
        }, function(e) {
            o += 8;
            var n = t.readByte(e);
            L = 255 & (n >> 1 | U << 7), U = 1 & n | d[L], t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = t.readByte(e), U = s[w] >> 7, s[w] <<= 1, U |= d[s[w]], t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = t.readByte(e), U = s[v] >> 7, s[v] <<= 1, U |= d[s[v]], t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = t.readByte(e), U = s[l] >> 7, s[l] <<= 1, U |= d[s[l]], t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = t.readByte(e), U = s[g] >> 7, s[g] <<= 1, U |= d[s[g]], t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = t.readByte(e), U = s[p] >> 7, s[p] <<= 1, U |= d[s[p]], t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = t.readByte(e), U = s[m] >> 7, s[m] <<= 1, U |= d[s[m]], t.writeByte(e, s[m])
        }, function(e) {
            o += 8, s[b] = t.readByte(e), U = s[b] >> 7, s[b] <<= 1, U |= d[s[b]], t.writeByte(e, s[b])
        }, function(e) {
            o += 8, L = t.readByte(e), U = L >> 7, L = L << 1 & 255, U |= d[L], t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = t.readByte(e);
            var n = s[w];
            s[w] = 128 & n | n >> 1, U = 1 & n | d[s[w]], t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = t.readByte(e);
            var n = s[v];
            s[v] = 128 & n | n >> 1, U = 1 & n | d[s[v]], t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = t.readByte(e);
            var n = s[l];
            s[l] = 128 & n | n >> 1, U = 1 & n | d[s[l]], t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = t.readByte(e);
            var n = s[g];
            s[g] = 128 & n | n >> 1, U = 1 & n | d[s[g]], t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = t.readByte(e);
            var n = s[p];
            s[p] = 128 & n | n >> 1, U = 1 & n | d[s[p]], t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = t.readByte(e);
            var n = s[m];
            s[m] = 128 & n | n >> 1, U = 1 & n | d[s[m]], t.writeByte(e, s[m])
        }, function(e) {
            o += 8, s[b] = t.readByte(e);
            var n = s[b];
            s[b] = 128 & n | n >> 1, U = 1 & n | d[s[b]], t.writeByte(e, s[b])
        }, function(e) {
            o += 8;
            var n = t.readByte(e);
            L = 128 & n | n >> 1, U = 1 & n | d[L], t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = t.readByte(e), U = s[w] >> 7, s[w] = s[w] << 1 | 1, U = d[s[w]], t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = t.readByte(e), U = s[v] >> 7, s[v] = s[v] << 1 | 1, U = d[s[v]], t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = t.readByte(e), U = s[l] >> 7, s[l] = s[l] << 1 | 1, U = d[s[l]], t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = t.readByte(e), U = s[g] >> 7, s[g] = s[g] << 1 | 1, U = d[s[g]], t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = t.readByte(e), U = s[p] >> 7, s[p] = s[p] << 1 | 1, U = d[s[p]], t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = t.readByte(e), U = s[m] >> 7, s[m] = s[m] << 1 | 1, U = d[s[m]], t.writeByte(e, s[m])
        }, function(e) {
            o += 8, s[b] = t.readByte(e), U = s[b] >> 7, s[b] = s[b] << 1 | 1, U = d[s[b]], t.writeByte(e, s[b])
        }, function(e) {
            o += 8, L = t.readByte(e), U = L >> 7, L = 255 & (L << 1 | 1), U = d[L], t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = t.readByte(e), U = 1 & s[w], s[w] >>= 1, U |= d[s[w]], t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = t.readByte(e), U = 1 & s[v], s[v] >>= 1, U |= d[s[v]], t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = t.readByte(e), U = 1 & s[l], s[l] >>= 1, U |= d[s[l]], t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = t.readByte(e), U = 1 & s[g], s[g] >>= 1, U |= d[s[g]], t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = t.readByte(e), U = 1 & s[p], s[p] >>= 1, U |= d[s[p]], t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = t.readByte(e), U = 1 & s[m], s[m] >>= 1, U |= d[s[m]], t.writeByte(e, s[m])
        }, function(e) {
            o += 8, s[b] = t.readByte(e), U = 1 & s[b], s[b] >>= 1, U |= d[s[b]], t.writeByte(e, s[b])
        }, function(e) {
            o += 8, L = t.readByte(e), U = 1 & L, L >>= 1, U |= d[L], t.writeByte(e, L)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((1 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((1 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((1 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((1 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((1 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((1 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((1 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((1 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((2 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((2 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((2 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((2 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((2 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((2 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((2 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((2 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((4 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((4 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((4 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((4 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((4 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((4 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((4 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((4 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((8 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((8 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((8 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((8 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((8 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((8 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((8 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((8 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((16 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((16 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((16 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((16 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((16 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((16 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((16 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((16 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((32 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((32 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((32 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((32 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((32 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((32 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((32 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((32 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((64 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((64 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((64 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((64 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((64 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((64 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((64 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((64 & s[b]) > 0 ? 16 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((128 & s[b]) > 0 ? 144 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((128 & s[b]) > 0 ? 144 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((128 & s[b]) > 0 ? 144 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((128 & s[b]) > 0 ? 144 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((128 & s[b]) > 0 ? 144 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((128 & s[b]) > 0 ? 144 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((128 & s[b]) > 0 ? 144 : 84)
        }, function(e) {
            o += 5, s[b] = t.readByte(e), U = 1 & U | 40 & s[b] | ((128 & s[b]) > 0 ? 144 : 84)
        }, function(e) {
            o += 8, s[w] = 254 & t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 254 & t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 254 & t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 254 & t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 254 & t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 254 & t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 254 & t.readByte(e))
        }, function(e) {
            o += 8, L = 254 & t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 253 & t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 253 & t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 253 & t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 253 & t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 253 & t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 253 & t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 253 & t.readByte(e))
        }, function(e) {
            o += 8, L = 253 & t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 251 & t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 251 & t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 251 & t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 251 & t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 251 & t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 251 & t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 251 & t.readByte(e))
        }, function(e) {
            o += 8, L = 251 & t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 247 & t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 247 & t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 247 & t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 247 & t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 247 & t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 247 & t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 247 & t.readByte(e))
        }, function(e) {
            o += 8, L = 247 & t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 239 & t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 239 & t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 239 & t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 239 & t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 239 & t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 239 & t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 239 & t.readByte(e))
        }, function(e) {
            o += 8, L = 239 & t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 223 & t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 223 & t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 223 & t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 223 & t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 223 & t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 223 & t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 223 & t.readByte(e))
        }, function(e) {
            o += 8, L = 223 & t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 191 & t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 191 & t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 191 & t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 191 & t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 191 & t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 191 & t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 191 & t.readByte(e))
        }, function(e) {
            o += 8, L = 191 & t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 127 & t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 127 & t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 127 & t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 127 & t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 127 & t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 127 & t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 127 & t.readByte(e))
        }, function(e) {
            o += 8, L = 127 & t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 1 | t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 1 | t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 1 | t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 1 | t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 1 | t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 1 | t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 1 | t.readByte(e))
        }, function(e) {
            o += 8, L = 1 | t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 2 | t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 2 | t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 2 | t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 2 | t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 2 | t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 2 | t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 2 | t.readByte(e))
        }, function(e) {
            o += 8, L = 2 | t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 4 | t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 4 | t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 4 | t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 4 | t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 4 | t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 4 | t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 4 | t.readByte(e))
        }, function(e) {
            o += 8, L = 4 | t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 8 | t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 8 | t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 8 | t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 8 | t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 8 | t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 8 | t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 8 | t.readByte(e))
        }, function(e) {
            o += 8, L = 8 | t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 16 | t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 16 | t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 16 | t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 16 | t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 16 | t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 16 | t.readByte(e), t.writeByte(e, s[m]);
        }, function(e) {
            o += 8, t.writeByte(e, 16 | t.readByte(e))
        }, function(e) {
            o += 8, L = 16 | t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 32 | t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 32 | t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 32 | t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 32 | t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 32 | t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 32 | t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 32 | t.readByte(e))
        }, function(e) {
            o += 8, L = 32 | t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 64 | t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 64 | t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 64 | t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 64 | t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 64 | t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 64 | t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 64 | t.readByte(e))
        }, function(e) {
            o += 8, L = 64 | t.readByte(e), t.writeByte(e, L)
        }, function(e) {
            o += 8, s[w] = 128 | t.readByte(e), t.writeByte(e, s[w])
        }, function(e) {
            o += 8, s[v] = 128 | t.readByte(e), t.writeByte(e, s[v])
        }, function(e) {
            o += 8, s[l] = 128 | t.readByte(e), t.writeByte(e, s[l])
        }, function(e) {
            o += 8, s[g] = 128 | t.readByte(e), t.writeByte(e, s[g])
        }, function(e) {
            o += 8, s[p] = 128 | t.readByte(e), t.writeByte(e, s[p])
        }, function(e) {
            o += 8, s[m] = 128 | t.readByte(e), t.writeByte(e, s[m])
        }, function(e) {
            o += 8, t.writeByte(e, 128 | t.readByte(e))
        }, function(e) {
            o += 8, L = 128 | t.readByte(e), t.writeByte(e, L)
        }]
}

function ZX81(t, e, n, r) {
    function i() {
        var t = tape.getNextTrack();
        if (null != t) {
            var e, n = 255,
                r = 128,
                i = zx81opts.RAMTOP - 3,
                o = zx81opts.RAMTOP + 1,
                a = 0,
                c = 0,
                u = [n, r, 255 & i, i >> 8, 255 & o, o >> 8, a, 255 & c, c >> 8],
                f = [118, 6, 0, 62];
            for (e = 0; e < u.length; e++) w[16384 + e] = 255 & u[e];
            for (e = 0; e < f.length; e++) w[i + e] = 255 & f[e];
            for (e = 0; e < t.data.length; e++) w[16393 + e] = t.data[e];
            p.setIY(16384), p.setI(30), p.setSP(i), p.setPC(519)
        }
    }
    var o, a = !1,
        c = !1,
        u = 0,
        f = 207,
        y = 0,
        B = 0,
        d = 0,
        s = !1,
        h = new Uint8Array(1024),
        w = new Uint8Array(65536),
        v = new Array,
        l = 0,
        g = r,
        p = new Z80(this);
    1 == e ? tape.setP(t) : 3 == e ? tape.setPZIP(t) : 2 == e ? tape.setTZX(t) : 4 == e && tape.setTZXZIP(t), tape.setTrackNumber(n), this.start = function(t) {
        v.length = 0;
        var e = 0;
        v[e++] = new FileToLoad(zx81opts.rom, w, 0, 65536), 1 == zx81opts.chrgen && (v[e++] = new FileToLoad("dkchr.rom", w, 8192, 65536)), this.waitForFiles(t)
    }, this.waitForFiles = function(t) {
        for (var e = !0, n = !1, r = 0; r < v.length; r++)
            if (v[r].loadedLen <= 0) {
                e = !1, n |= -1 == v[r].loadedLen;
                break
            }
        if (!e) {
            if (1e3 > l && !n) return l++, void setTimeout(function(e) {
                e.waitForFiles(t)
            }, 10, this);
            for (var u = "", r = 0; r < v.length; r++) v[r].loadedLen <= 0 && (u += v[r].fileName + ",");
            return void(statusLabel.innerHTML = "Failed to load required files: " + u.substr(0, u.length - 1))
        }
        var h = v[0].loadedLen;
        1 == zx81opts.chrgen && (h += v[1].loadedLen), ROMTOP = h - 1, memotechMode = 0;
        for (var r = ROMTOP + 1; 65536 > r; r++) w[r] = 7;
        a = !1, c = !1, s = !1, B = 0, f = 207, y = 0, d = 0, o = null, p.reset(), i(), t()
    }, this.doScanLine = function(t) {
        var e = 0,
            n = t.rasterPos;
        if (0 != t.scanSyncValid) {
            for (var r = c ? 4294243572 : 4278190080; y-- > 0;) t.screenImageARGB[t.rasterPos++] = r, t.screenImageARGB[t.rasterPos++] = r;
            t.scanSyncValid = 0, t.scanSyncLen = 0
        }
        do {
            d = 0;
            var i = p.doOpcode();
            s && (i += p.interrupt(i), s = !1);
            for (var o = i << 1; o-- > 0;) {
                var h = 32768 & B,
                    r = 4278190080;
                c && (r = 0 != h ? 4278190080 : 4294243572), t.screenImageARGB[t.rasterPos++] = r, B <<= 1
            }
            switch (d) {
                case 3:
                    a = !1, c || (u = 0), 0 != t.scanSyncLen && (t.scanSyncValid = 2), c = !0;
                    break;
                case 2:
                    a = !0, c || (u = 0), 0 != t.scanSyncLen && (t.scanSyncValid = 2), c = !0;
                    break;
                case 1:
                    a || (c = !1, 0 == t.scanSyncLen && (t.scanSyncValid = 0));
                    break;
                case 4:
                    c || (u = 0), 0 != t.scanSyncLen && (t.scanSyncValid = 2), c = !0
            }
            if (f -= i, 0 == (64 & p.getR()) && (s = !0), c || (t.scanSyncLen += i), 0 >= f) {
                if (a) {
                    var w = p.nmi(t.rasterPos - n);
                    f -= w, i += w
                }
                if (y = -f, c && 0 == t.scanSyncLen) {
                    t.scanSyncLen = 10, t.scanSyncValid = 1;
                    var v = t.rasterPos - n - 414;
                    v > 0 && (t.rasterPos -= v), u = 7 & ++u
                }
                f += 207
            }
            e += i
        } while (t.rasterPos - n < 420 && 0 == t.scanSyncValid);
        return 2 == t.scanSyncValid && (f = 207, y = 0), e
    }, this.writeByte = function(t, e) {
        2 == zx81opts.chrgen && t >= 33792 && 34815 >= t && (h[t - 33792] = e, zx81opts.enableqschrgen = !0), t > zx81opts.RAMTOP && (t &= zx81opts.RAMTOP), t <= ROMTOP && zx81opts.protectROM || (w[t] = e)
    }, this.readByte = function(t) {
        var e;
        return e = t <= zx81opts.RAMTOP ? w[t] : w[(t & zx81opts.RAMTOP - 16384) + 16384]
    }, this.opcodeFetch = function(t) {
        if (32768 > t) return this.readByte(t);
        var e, n = this.readByte(t >= 49152 ? 32767 & t : t),
            r = 0 != (64 & n),
            i = 0 != (128 & n);
        e = r ? n : 0;
        var o = !1;
        if (!r) {
            n = 3 == zx81opts.chrgen && 0 != (1 & a) || 2 == zx81opts.chrgen && zx81opts.enableqschrgen ? (128 & n) >> 1 | 63 & n : 63 & n;
            var a = p.getI();
            n = 64 > a || a >= 128 && 192 > a && 3 == zx81opts.chrgen ? 2 == zx81opts.chrgen && zx81opts.enableqschrgen ? h[n << 3 | u] : this.readByte(((254 & a) << 8) + (n << 3) | u) : 255, o = !0
        }
        return o ? (B |= n, i && (B ^= 255), 0) : e
    }, this.writePort = function(t, e) {
        var n = 255 & t;
        253 == n ? 0 != zx81opts.machine && (d = 3) : 254 == n && 0 != zx81opts.machine && (d = 2), 0 == d && (d = 4)
    }, this.readPort = function(t) {
        if (0 == (1 & t)) {
            var e = 128;
            d = 1;
            for (var n = t >> 8, r = 0; 8 > r; r++) n & 1 << r || (e |= g[r]);
            return 255 & ~e
        }
        return 255
    }, this.patchTest = function() {
        var t = p.getPC();
        if (851 == t && 254 == w[t]) {
            if (null != o) return 0 == o.loadedLen ? (p.setPC(848), !0) : o.loadedLen < 0 ? (o = null, p.setSP(p.getSP() + 2), p.setPC(756), !0) : (o = null, p.setSP(p.getSP() + 2), p.setPC(519), !0);
            var e = p.getDE(),
                n = "";
            if (!(32768 & e)) {
                for (; !(128 & w[e]) && n.length < 128;) n += ZX81_TO_ASCII[63 & w[e++]];
                n += ZX81_TO_ASCII[63 & w[e]]
            }
            var r = tape.getTrackName(n);
            if (null != r) {
                for (var i = 0; i < r.data.length; i++) w[16393 + i] = r.data[i];
                return p.addTs(6), p.setSP(p.getSP() + 2), p.setPC(519), !0
            }
            if (n.length > 0) {
                var a = n[0];
                a > "0" && "9" >= a && (a = "0");
                var c = ("pfiles/" + a + "/" + n + ".p").toLowerCase();
                return o = new FileToLoad(c, w, 16393, 65536), p.setPC(848), !0
            }
        } else if (546 == t && 62 == w[t]) {
            for (var i = 0; i < currentProgram.length; i++) w[16384 + i] = currentProgram[i];
            return p.addTs(6), p.setSP(p.getSP() + 2), p.setPC(515), !0
        }
        return !1
    }
}

function FileToLoad(t, e, n, r) {
    this.loadedLen = 0, this.fileName = t.replace("\\", "/");
    var i = new XMLHttpRequest;
    i.open("GET", "/" + this.fileName, !0), i.responseType = "arraybuffer";
    var o = this;
    i.onreadystatechange = function() {
        if (4 === this.readyState && 200 === this.status) {
            for (var t = new Uint8Array(this.response), i = r < t.length ? r : t.length, a = 0; i > a; a++) e[n + a] = t[a];
            o.loadedLen = i
        } else 404 === this.status && (o.loadedLen = -1)
    }, i.send()
}

function Track(t, e) {
    this.name = t, this.data = e
}

function ZX81Display(t, e) {
    function n() {
        var t = (new Date).getTime();
        t - f >= 20 && (1 != l ? (h.getContext("2d").putImageData(s, -42, -32), d.fillStyle = "white", d.fillRect(0, 0, B.width, B.height), d.drawImage(h, 0, 0, 320 * l, 240 * l)) : d.putImageData(s, -42, -32), f = t)
    }
    this.rasterPos = 0, this.scanSyncLen = 0, this.scanSyncValid = 0;
    var r, i, o, a = !1,
        c = 0,
        u = 0,
        f = 0,
        y = t,
        B = e,
        d = B.getContext("2d");
    d.webkitImageSmoothingEnabled = !1;
    var s = d.createImageData(417, 380);
    this.screenImageARGB = new Uint32Array(s.data.buffer);
    var h = document.createElement("CANVAS");
    h.width = 320, h.height = 240, r = (new Date).getTime();
    var w = !1,
        v = !1;
    this.setScale = function(t) {
        return 1 >= t && (t = 1), t >= 2 && (t = 2), l = t, B.width = 320 * l, B.height = 240 * l, l
    }, this.setSpeed = function(t) {
        return 10 >= t && (t = 10), t >= 1e3 && (t = 1e3), g = t, i = 1e3 / (50 * (g / 100)), g
    };
    var l, g;
    this.setScale(1), this.setSpeed(100), this.start = function(t, e, n, r) {
        o = new ZX81(t, e, n, r);
        var i = this;
        o.start(function() {
            i.displayLoop()
        })
    }, this.displayLoop = function() {
        for (var t = 0, e = 0; 4 > t;) {
            if (100 == c) {
                var f = (new Date).getTime();
                y.innerHTML = "FPS: " + Math.ceil(1e3 * c / (f - r)), c = 0, r = f
            }
            if (t = 1e3, a) c = 0, r = (new Date).getTime();
            else {
                c++;
                for (var B = 64584 + u; B > 0;)
                    if (B -= o.doScanLine(this), this.rasterPos >= 158043 && (this.scanSyncValid = 1), this.scanSyncLen < 10 && (this.scanSyncValid = 0), 0 != this.scanSyncValid) {
                        var d = this.rasterPos % 417;
                        d > 405 && (this.rasterPos += 417 - d);
                        var s = this.rasterPos / 417;
                        (s >= 323 || s > 283 && this.scanSyncLen > 350) && (this.rasterPos = 0, n())
                    }
                u = B;
                var f = (new Date).getTime();
                t = i * c - (f - r)
            }(5 == e++ || w) && (t = 4)
        }
        w || setTimeout(function(t) {
            t.displayLoop()
        }, t, this), v = !0
    }, this.stop = function(t) {
        if (w = !0, t)
            for (; !v;);
    }
}

function ZX81Keyboard() {
    function t(t, e, n, r) {
        this.addr1 = t, this.data1 = e, this.addr2 = n, this.data2 = r
    }

    function e(t) {
        if ("undefined" != typeof t.target && "undefined" != typeof t.target.id) {
            var e = t.target.id;
            if ("_button" == e.substr(e.length - 7, 7) || "_select" == e.substr(e.length - 7, 7)) return 0
        }
        var n = t.charCode;
        if (0 == n && t.keyCode >= "0".charCodeAt(0) && t.keyCode <= "9".charCodeAt(0) && (n = t.keyCode), 0 == n) {
            var r = "";
            "undefined" != typeof t.key && t.key.length > 0 ? r = t.key : "undefined" != typeof t.keyIdentifier && t.keyIdentifier.length > 0 && (r = t.keyIdentifier), 1 == r.length ? n = r.charCodeAt(0) : "Left" == r ? n = "5".charCodeAt(0) : "Down" == r ? n = "6".charCodeAt(0) : "Up" == r ? n = "7".charCodeAt(0) : "Right" == r ? n = "8".charCodeAt(0) : "Del" == r ? n = ")".charCodeAt(0) + 256 : "Backspace" == r ? n = ")".charCodeAt(0) + 256 : "Shift" == r ? n = 16 : "Insert" == r ? n = -1 : 2 == r.length && "F" == r[0] ? n = -1 : "F10" == r || "F11" == r || "F12" == r ? n = -1 : 37 == t.keyCode ? n = "5".charCodeAt(0) : 40 == t.keyCode ? n = "6".charCodeAt(0) : 38 == t.keyCode ? n = "7".charCodeAt(0) : 39 == t.keyCode ? n = "8".charCodeAt(0) : 46 == t.keyCode ? n = ")".charCodeAt(0) + 256 : 8 == t.keyCode ? n = ")".charCodeAt(0) + 256 : 45 == t.keyCode && (n = -1)
        }
        return 0 == n && "undefined" != typeof t.keyCode && (n = t.keyCode), 0 == n && "undefined" != typeof t.which && (n = t.which), 0 >= n ? 0 : (!t.shiftKey && n >= "A".charCodeAt(0) && n <= "Z".charCodeAt(0) && (n += "a".charCodeAt(0) - "A".charCodeAt(0)), t.preventDefault(), t.shiftKey && (n |= 256), n)
    }
    this.zxKeyboard = new Uint8Array(8);
    for (var n = new Array(512), r = 1, i = 2, o = 4, a = 8, c = 16, u = 0, f = 1, y = 2, B = 3, d = 4, s = 5, h = 6, w = 7, v = String.fromCharCode(13), l = String.fromCharCode(16), g = String.fromCharCode(163), p = [
            [0, v, h, r, 255, 255],
            [0, l, u, r, 255, 255],
            [0, "a", f, r, 255, 255],
            [0, "b", w, c, 255, 255],
            [0, "c", u, a, 255, 255],
            [0, "d", f, o, 255, 255],
            [0, "e", y, o, 255, 255],
            [0, "f", f, a, 255, 255],
            [0, "g", f, c, 255, 255],
            [0, "h", h, c, 255, 255],
            [0, "i", s, o, 255, 255],
            [0, "j", h, a, 255, 255],
            [0, "k", h, o, 255, 255],
            [0, "l", h, i, 255, 255],
            [0, "m", w, o, 255, 255],
            [0, "n", w, a, 255, 255],
            [0, "o", s, i, 255, 255],
            [0, "p", s, r, 255, 255],
            [0, "q", y, r, 255, 255],
            [0, "r", y, a, 255, 255],
            [0, "s", f, i, 255, 255],
            [0, "t", y, c, 255, 255],
            [0, "u", s, a, 255, 255],
            [0, "v", u, c, 255, 255],
            [0, "w", y, i, 255, 255],
            [0, "x", u, o, 255, 255],
            [0, "y", s, c, 255, 255],
            [0, "z", u, i, 255, 255],
            [0, "1", B, r, 255, 255],
            [0, "2", B, i, 255, 255],
            [0, "3", B, o, 255, 255],
            [0, "4", B, a, 255, 255],
            [0, "5", B, c, 255, 255],
            [0, "6", d, c, 255, 255],
            [0, "7", d, a, 255, 255],
            [0, "8", d, o, 255, 255],
            [0, "9", d, i, 255, 255],
            [0, "0", d, r, 255, 255],
            [0, ".", w, i, 255, 255],
            [0, " ", w, r, 255, 255],
            [1, v, h, r, u, r],
            [1, l, u, r, 255, 255],
            [1, " ", w, r, 255, 255],
            [1, "A", f, r, u, r],
            [1, "B", w, c, u, r],
            [1, "C", u, a, u, r],
            [1, "D", f, o, u, r],
            [1, "E", y, o, u, r],
            [1, "F", f, a, u, r],
            [1, "G", f, c, u, r],
            [1, "H", h, c, u, r],
            [1, "I", s, o, u, r],
            [1, "J", h, a, u, r],
            [1, "K", h, o, u, r],
            [1, "L", h, i, u, r],
            [1, "M", w, o, u, r],
            [1, "N", w, a, u, r],
            [1, "O", s, i, u, r],
            [1, "P", s, r, u, r],
            [1, "Q", y, r, u, r],
            [1, "R", y, a, u, r],
            [1, "S", f, i, u, r],
            [1, "T", y, c, u, r],
            [1, "U", s, a, u, r],
            [1, "V", u, c, u, r],
            [1, "W", y, i, u, r],
            [1, "X", u, o, u, r],
            [1, "Y", s, c, u, r],
            [1, "Z", u, i, u, r],
            [1, "1", B, r, u, r],
            [1, "2", B, i, u, r],
            [1, "3", B, o, u, r],
            [1, "4", B, a, u, r],
            [1, "5", B, c, u, r],
            [1, "6", d, c, u, r],
            [1, "7", d, a, u, r],
            [1, "8", d, o, u, r],
            [1, "9", d, i, u, r],
            [1, "0", d, r, u, r],
            [1, "!", B, r, u, r],
            [1, '"', B, i, u, r],
            [1, g, B, o, u, r],
            [1, "$", B, a, u, r],
            [1, "%", B, c, u, r],
            [1, "^", d, c, u, r],
            [1, "&", d, a, u, r],
            [1, "*", d, o, u, r],
            [1, "(", d, i, u, r],
            [1, ")", d, r, u, r],
            [1, "@", B, i, u, r],
            [1, "#", B, o, u, r],
            [0, ";", u, o, u, r],
            [1, ":", u, i, u, r],
            [0, "-", h, a, u, r],
            [0, "=", h, i, u, r],
            [1, "+", h, o, u, r],
            [0, ",", w, i, u, r],
            [1, ".", w, i, u, r],
            [1, "<", w, a, u, r],
            [1, ">", w, o, u, r],
            [0, "/", u, c, u, r],
            [1, "?", u, a, u, r],
            [0, "+", h, o, u, r],
            [0, "*", w, c, u, r]
        ], m = 0; 512 > m; m++) n[m] = new t(0, 0, 255, 255);
    for (var m = 0; m < p.length; m++) {
        var A = 256 * p[m][0] + p[m][1].charCodeAt(0);
        n[A] = new t(p[m][2], p[m][3], p[m][4], p[m][5])
    }
    var x;
    this.keyDown = function(t) {
        var r = e(t);
        if (!(0 >= r)) {
            x = (new Date).getTime();
            var i = n[r];
            this.zxKeyboard[i.addr1] |= i.data1, 255 != i.addr2 && (this.zxKeyboard[i.addr2] |= i.data2)
        }
    }, this.keyUp = function(t) {
        var r = e(t);
        if (!(0 >= r)) {
            var i = n[r];
            this.zxKeyboard[i.addr1] &= ~i.data1, 255 == i.addr2 || t.shiftKey || (this.zxKeyboard[i.addr2] &= ~i.data2)
        }
    }
}! function(t) {
    function e() {
        this.next = null, this.list = null
    }

    function n() {
        this.e = 0, this.b = 0, this.n = 0, this.t = null
    }

    function r(t, r, i, o, a, c) {
        this.BMAX = 16, this.N_MAX = 288, this.status = 0, this.root = null, this.m = 0;
        var u, f, y, B, d, s, h, w, v, l, g, p, m, A, x, k, S, b = new Array(this.BMAX + 1),
            C = new Array(this.BMAX + 1),
            N = new n,
            T = new Array(this.BMAX),
            I = new Array(this.N_MAX),
            P = new Array(this.BMAX + 1);
        for (S = this.root = null, s = 0; s < b.length; s++) b[s] = 0;
        for (s = 0; s < C.length; s++) C[s] = 0;
        for (s = 0; s < T.length; s++) T[s] = null;
        for (s = 0; s < I.length; s++) I[s] = 0;
        for (s = 0; s < P.length; s++) P[s] = 0;
        f = r > 256 ? t[256] : this.BMAX, v = t, l = 0, s = r;
        do b[v[l]]++, l++; while (--s > 0);
        if (b[0] == r) return this.root = null, this.m = 0, void(this.status = 0);
        for (h = 1; h <= this.BMAX && 0 == b[h]; h++);
        for (w = h, h > c && (c = h), s = this.BMAX; 0 != s && 0 == b[s]; s--);
        for (B = s, c > s && (c = s), A = 1 << h; s > h; h++, A <<= 1)
            if ((A -= b[h]) < 0) return this.status = 2, void(this.m = c);
        if ((A -= b[s]) < 0) return this.status = 2, void(this.m = c);
        for (b[s] += A, P[1] = h = 0, v = b, l = 1, m = 2; --s > 0;) P[m++] = h += v[l++];
        v = t, l = 0, s = 0;
        do 0 != (h = v[l++]) && (I[P[h]++] = s); while (++s < r);
        for (r = P[B], P[0] = s = 0, v = I, l = 0, d = -1, p = C[0] = 0, g = null, x = 0; B >= w; w++)
            for (u = b[w]; u-- > 0;) {
                for (; w > p + C[1 + d];) {
                    if (p += C[1 + d], d++, x = (x = B - p) > c ? c : x, (y = 1 << (h = w - p)) > u + 1)
                        for (y -= u + 1, m = w; ++h < x && !((y <<= 1) <= b[++m]);) y -= b[m];
                    for (p + h > f && f > p && (h = f - p), x = 1 << h, C[1 + d] = h, g = new Array(x), k = 0; x > k; k++) g[k] = new n;
                    S = null == S ? this.root = new e : S.next = new e, S.next = null, S.list = g, T[d] = g, d > 0 && (P[d] = s, N.b = C[d], N.e = 16 + h, N.t = g, h = (s & (1 << p) - 1) >> p - C[d], T[d - 1][h].e = N.e, T[d - 1][h].b = N.b, T[d - 1][h].n = N.n, T[d - 1][h].t = N.t)
                }
                for (N.b = w - p, l >= r ? N.e = 99 : v[l] < i ? (N.e = v[l] < 256 ? 16 : 15, N.n = v[l++]) : (N.e = a[v[l] - i], N.n = o[v[l++] - i]), y = 1 << w - p, h = s >> p; x > h; h += y) g[h].e = N.e, g[h].b = N.b, g[h].n = N.n, g[h].t = N.t;
                for (h = 1 << w - 1; 0 != (s & h); h >>= 1) s ^= h;
                for (s ^= h;
                    (s & (1 << p) - 1) != P[d];) p -= C[d], d--
            }
        this.m = C[1], this.status = 0 != A && 1 != B ? 1 : 0
    }

    function i() {
        return I.length == P ? -1 : 255 & I.charCodeAt(P++)
    }

    function o(t) {
        for (; t > m;) p |= i() << m, m += 8
    }

    function a(t) {
        return p & R[t]
    }

    function c(t) {
        p >>= t, m -= t
    }

    function u(t, e, n) {
        var r, i, u;
        if (0 == n) return 0;
        for (u = 0;;) {
            for (o(N), i = b.list[a(N)], r = i.e; r > 16;) {
                if (99 == r) return -1;
                c(i.b), r -= 16, o(r), i = i.t[a(r)], r = i.e
            }
            if (c(i.b), 16 != r) {
                if (15 == r) break;
                for (o(r), k = i.n + a(r), c(r), o(T), i = C.list[a(T)], r = i.e; r > 16;) {
                    if (99 == r) return -1;
                    c(i.b), r -= 16, o(r), i = i.t[a(r)], r = i.e
                }
                for (c(i.b), o(r), S = v - i.n - a(r), c(r); k > 0 && n > u;) k--, S &= z - 1, v &= z - 1, t[e + u++] = w[v++] = w[S++];
                if (u == n) return n
            } else if (v &= z - 1, t[e + u++] = w[v++] = i.n, u == n) return n
        }
        return A = -1, u
    }

    function f(t, e, n) {
        var r;
        if (r = 7 & m, c(r), o(16), r = a(16), c(16), o(16), r != (65535 & ~p)) return -1;
        for (c(16), k = r, r = 0; k > 0 && n > r;) k--, v &= z - 1, o(8), t[e + r++] = w[v++] = a(8), c(8);
        return 0 == k && (A = -1), r
    }

    function y(t, e, n) {
        if (null == U) {
            var i, o, a = new Array(288);
            for (i = 0; 144 > i; i++) a[i] = 8;
            for (; 256 > i; i++) a[i] = 9;
            for (; 280 > i; i++) a[i] = 7;
            for (; 288 > i; i++) a[i] = 8;
            if (g = 7, o = new r(a, 288, 257, F, Z, g), 0 != o.status) return alert("HufBuild error: " + o.status), -1;
            for (U = o.root, g = o.m, i = 0; 30 > i; i++) a[i] = 5;
            if (zip_fixed_bd = 5, o = new r(a, 30, 0, O, X, zip_fixed_bd), o.status > 1) return U = null, alert("HufBuild error: " + o.status), -1;
            l = o.root, zip_fixed_bd = o.m
        }
        return b = U, C = l, N = g, T = zip_fixed_bd, u(t, e, n)
    }

    function B(t, e, n) {
        var i, f, y, B, d, s, h, w, v, l = new Array(316);
        for (i = 0; i < l.length; i++) l[i] = 0;
        if (o(5), h = 257 + a(5), c(5), o(5), w = 1 + a(5), c(5), o(4), s = 4 + a(4), c(4), h > 286 || w > 30) return -1;
        for (f = 0; s > f; f++) o(3), l[D[f]] = a(3), c(3);
        for (; 19 > f; f++) l[D[f]] = 0;
        if (N = 7, v = new r(l, 19, 19, null, null, N), 0 != v.status) return -1;
        for (b = v.root, N = v.m, B = h + w, i = y = 0; B > i;)
            if (o(N), d = b.list[a(N)], f = d.b, c(f), f = d.n, 16 > f) l[i++] = y = f;
            else if (16 == f) {
            if (o(2), f = 3 + a(2), c(2), i + f > B) return -1;
            for (; f-- > 0;) l[i++] = y
        } else if (17 == f) {
            if (o(3), f = 3 + a(3), c(3), i + f > B) return -1;
            for (; f-- > 0;) l[i++] = 0;
            y = 0
        } else {
            if (o(7), f = 11 + a(7), c(7), i + f > B) return -1;
            for (; f-- > 0;) l[i++] = 0;
            y = 0
        }
        if (N = L, v = new r(l, h, 257, F, Z, N), 0 == N && (v.status = 1), 0 != v.status) return 1 == v.status, -1;
        for (b = v.root, N = v.m, i = 0; w > i; i++) l[i] = l[i + h];
        return T = M, v = new r(l, w, 0, O, X, T), C = v.root, T = v.m, 0 == T && h > 257 ? -1 : (1 == v.status, 0 != v.status ? -1 : u(t, e, n))
    }

    function d() {
        null == w && (w = new Array(2 * z)), v = 0, p = 0, m = 0, A = -1, x = !1, k = S = 0, b = null
    }

    function s(t, e, n) {
        var r, i;
        for (r = 0; n > r;) {
            if (x && -1 == A) return r;
            if (k > 0) {
                if (A != E)
                    for (; k > 0 && n > r;) k--, S &= z - 1, v &= z - 1, t[e + r++] = w[v++] = w[S++];
                else {
                    for (; k > 0 && n > r;) k--, v &= z - 1, o(8), t[e + r++] = w[v++] = a(8), c(8);
                    0 == k && (A = -1)
                }
                if (r == n) return r
            }
            if (-1 == A) {
                if (x) break;
                o(1), 0 != a(1) && (x = !0), c(1), o(2), A = a(2), c(2), b = null, k = 0
            }
            switch (A) {
                case 0:
                    i = f(t, e + r, n - r);
                    break;
                case 1:
                    i = null != b ? u(t, e + r, n - r) : y(t, e + r, n - r);
                    break;
                case 2:
                    i = null != b ? u(t, e + r, n - r) : B(t, e + r, n - r);
                    break;
                default:
                    i = -1
            }
            if (-1 == i) return x ? 0 : -1;
            r += i
        }
        return r
    }

    function h(t, e) {
        var n = s(e, 0, e.length);
        if (n > 0) {
            for (var r = "", i = 0; n > i; i++) r += String.fromCharCode(e[i]);
            t.write(r)
        }
        return n
    }
    var w, v, l, g, p, m, A, x, k, S, b, C, N, T, I, P, z = 32768,
        E = 0,
        L = 9,
        M = 6,
        U = null,
        R = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535),
        F = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0),
        Z = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99),
        O = new Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577),
        X = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13),
        D = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15),
        _ = {};
    if ("object" == typeof module) {
        module.exports = _;
        var K = require("fs")
    } else t.JSInflate = _;
    _.inflate = function(t) {
        var e, n, r, i;
        for (d(), I = t, P = 0, n = new Array(1024), e = "";
            (r = s(n, 0, n.length)) > 0;)
            for (i = 0; r > i; i++) e += String.fromCharCode(n[i]);
        return I = null, e
    }, _.inflateStream = function(t, e, n) {
        var r, i;
        d(), I = t, P = 0, i = 0;
        var o = K.createWriteStream(e);
        r = new Array(1024);
        var a = 0;
        o.on("drain", function() {
            a = h(o, r), a > 0 ? i += a : (I = null, n(i))
        }), i += h(o, r)
    }
}(this),
function(t) {
    var e = function(t) {
        this.fileContents = new e.BigEndianBinaryStream(t)
    };
    t.JSUnzip = e, e.MAGIC_NUMBER = 67324752, e.EOCD_NUMBER = 101010256, e.CDENTRY_NUMBER = 33639248, e.prototype = {
        readEntries: function() {
            if (!this.isZipFile()) throw new Error("File is not a Zip file.");
            this.entries = [];
            for (var t = this.fileContents.length - 4, n = 0; t > 0 && (this.fileContents.seek(t), n = this.fileContents.getNextBytesAsNumber(4), n != e.EOCD_NUMBER);) t--;
            if (n != e.EOCD_NUMBER) throw "Failed to find end-of-central directory";
            this.fileContents.skip(12);
            var r = this.fileContents.getNextBytesAsNumber(4);
            if (0 > r || r > t) throw "Failed to find central directory";
            this.fileContents.seek(r);
            for (var i = new e.ZipEntry(this.fileContents);
                "string" == typeof i.data;) this.entries.push(i), i = new e.ZipEntry(this.fileContents)
        },
        isZipFile: function() {
            return this.fileContents.getByteRangeAsNumber(0, 4) === e.MAGIC_NUMBER
        }
    }, e.ZipEntry = function(t) {
        if (this.signature = t.getNextBytesAsNumber(4), this.signature === e.CDENTRY_NUMBER) {
            if (this.version = t.getNextBytesAsNumber(2), this.versionNeeded = t.getNextBytesAsNumber(2), this.bitFlag = t.getNextBytesAsNumber(2), this.compressionMethod = t.getNextBytesAsNumber(2), this.timeBlob = t.getNextBytesAsNumber(4), this.isEncrypted()) throw "File contains encrypted entry. Not supported.";
            if (this.isUsingUtf8()) throw "File is using UTF8. Not supported.";
            if (this.crc32 = t.getNextBytesAsNumber(4), this.compressedSize = t.getNextBytesAsNumber(4), this.uncompressedSize = t.getNextBytesAsNumber(4), this.isUsingZip64()) throw "File is using Zip64 (4gb+ file size). Not supported";
            this.fileNameLength = t.getNextBytesAsNumber(2), this.extraFieldLength = t.getNextBytesAsNumber(2), this.fileCommentLength = t.getNextBytesAsNumber(2), t.skip(8), this.localHeaderOffset = t.getNextBytesAsNumber(4), this.fileName = t.getNextBytesAsString(this.fileNameLength), this.extra = t.getNextBytesAsString(this.extraFieldLength), this.comment = t.getNextBytesAsString(this.fileCommentLength);
            var n = t.tell();
            t.seek(this.localHeaderOffset);
            var r = t.getNextBytesAsNumber(4);
            if (r !== e.MAGIC_NUMBER) throw "File entry has incorrect signature " + r.toString(16);
            t.skip(10);
            var i = t.getNextBytesAsNumber(4);
            if (0 != i && i != this.crc32) throw "CRC32 values do not match: " + i.toString(16) + " != " + this.crc32.toString(16);
            t.skip(8);
            var o = t.getNextBytesAsNumber(2),
                a = t.getNextBytesAsNumber(2),
                c = t.getNextBytesAsString(o);
            if (c != this.fileName) throw "File names do not match: " + c + " != " + this.fileName;
            this.fileExtra = t.getNextBytesAsString(a), this.data = t.getNextBytesAsString(this.compressedSize), t.seek(n)
        }
    }, e.ZipEntry.prototype = {
        isEncrypted: function() {
            return 1 === (1 & this.bitFlag)
        },
        isUsingUtf8: function() {
            return 2048 === (2048 & this.bitFlag)
        },
        isUsingBit3TrailingDataDescriptor: function() {
            return 8 === (8 & this.bitFlag)
        },
        isUsingZip64: function() {
            return 4294967295 === this.compressedSize || 4294967295 === this.uncompressedSize
        }
    }, e.BigEndianBinaryStream = function(t) {
        this.stream = t, this.length = t.length, this.resetByteIndex()
    }, e.BigEndianBinaryStream.prototype = {
        resetByteIndex: function() {
            this.currentByteIndex = 0
        },
        skip: function(t) {
            this.currentByteIndex += t
        },
        seek: function(t) {
            this.currentByteIndex = t
        },
        tell: function() {
            return this.currentByteIndex
        },
        eof: function() {
            return this.currentByteIndex >= this.stream.length
        },
        getByteAt: function(t) {
            return this.stream[t]
        },
        getNextBytesAsNumber: function(t) {
            var e = this.getByteRangeAsNumber(this.currentByteIndex, t);
            return this.currentByteIndex += t, e
        },
        getNextBytesAsString: function(t) {
            var e = this.getByteRangeAsString(this.currentByteIndex, t);
            return this.currentByteIndex += t, e
        },
        getNextBytesAsBytes: function(t) {
            var e = this.getByteRangeAsBytes(this.currentByteIndex, t);
            return this.currentByteIndex += t, e
        },
        getByteRangeAsNumber: function(t, e) {
            for (var n = 0, r = t + e - 1; r >= t;) n = (n << 8) + this.getByteAt(r), r--;
            return n
        },
        getByteRangeAsString: function(t, e) {
            for (var n = "", r = t + e, i = t; r > i;) {
                var o = this.getByteAt(i);
                n += String.fromCharCode(o), r -= Math.floor(o / 256), i++
            }
            return n
        },
        getByteRangeAsBytes: function(t, e) {
            return this.stream.subarray(t, t + e)
        }
    }
}(this);
var zx81opts = {
        machine: 1,
        protectROM: !0,
        RAMTOP: 32767,
        ROMTOP: 8191,
        truehires: 0,
        chrgen: 0,
        enableqschrgen: !1,
        maxireg: 32,
        rom: "roms/zx81.rom"
    },
    ZX81_TO_ASCII = ' !!!!!!!!!!"£$:?()><=+-*/;,.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    tape = {
        numPrograms: 0,
        currentProgram: -1,
        tracks: new Array,
        setTZXZIP: function(t) {
            this.tracks.length = 0;
            var e = new JSUnzip(t);
            if (e.isZipFile()) {
                e.readEntries();
                for (var n = 0; n < e.entries.length; n++) {
                    var r = e.entries[n];
                    if (".tzx" == r.fileName.substr(r.fileName.length - 4, 4).toLowerCase())
                        if (0 === r.compressionMethod) {
                            for (var i = new Uint8Array(r.data.length), o = 0; o < r.data.length; o++) i[o] = 255 & r.data.charCodeAt(o);
                            this.addTZXTracks(i)
                        } else if (8 === r.compressionMethod) {
                        for (var a = JSInflate.inflate(r.data), i = new Uint8Array(a.length), o = 0; o < a.length; o++) i[o] = 255 & a.charCodeAt(o);
                        this.addTZXTracks(i)
                    }
                }
            }
        },
        setPZIP: function(t) {
            this.tracks.length = 0, this.currentTrack = 0;
            var e = new JSUnzip(t);
            if (e.isZipFile()) {
                e.readEntries();
                for (var n = 0; n < e.entries.length; n++) {
                    var r = e.entries[n];
                    if (".p" == r.fileName.substr(r.fileName.length - 2, 2).toLowerCase())
                        if (0 === r.compressionMethod) {
                            for (var i = new Uint8Array(r.data.length), o = 0; o < r.data.length; o++) i[o] = 255 & r.data.charCodeAt(o);
                            this.addTrack("", i)
                        } else if (8 === r.compressionMethod) {
                        for (var a = JSInflate.inflate(r.data), i = new Uint8Array(a.length), o = 0; o < a.length; o++) i[o] = 255 & a.charCodeAt(o);
                        this.addTrack("", i)
                    }
                }
            }
        },
        setTZX: function(t) {
            this.tracks.length = 0, this.currentTrack = 0, this.addTZXTracks(t)
        },
        setP: function(t) {
            this.tracks.length = 0, this.currentTrack = 0, this.addTrack("", t)
        },
        addTrack: function(t, e) {
            this.tracks.push(new Track(t, e))
        },
        setTrackNumber: function(t) {
            t >= 0 && t < this.tracks.length && (this.currentTrack = t)
        },
        getTrackNumber: function(t) {
            return t < this.tracks.length ? (this.currentTrack = t + 1, this.tracks[t]) : null
        },
        getTrackName: function(t) {
            if (0 == t.length) return this.getNextTrack();
            for (var e = this.currentTrack; e < this.tracks.length;) {
                if (0 == this.tracks[e].name.length || this.tracks[e].name == t) return this.getTrackNumber(e);
                e++
            }
            return null
        },
        getNextTrack: function() {
            return this.currentTrack < this.tracks.length ? this.tracks[this.currentTrack++] : null
        },
        rewind: function() {
            this.currentTrack = 0
        },
        addTZXTracks: function(t) {
            var e = new JSUnzip.BigEndianBinaryStream(t),
                n = e.getNextBytesAsString(8);
            if ("ZXTape!" == n)
                for (e.skip(2); !e.eof();) {
                    var r = e.getNextBytesAsNumber(1);
                    if (25 == r) {
                        e.skip(12);
                        var i = e.getNextBytesAsNumber(4),
                            o = e.getNextBytesAsNumber(1),
                            a = e.getNextBytesAsNumber(1);
                        if (2 != a) return void console.log("Unsupported TZX general bits: " + a);
                        e.skip(4 * o + 2);
                        for (var c = Math.ceil(i / 8), u = e.getNextBytesAsBytes(c), f = "", y = 0; c > y && u[y] < 128;) y++;
                        for (var B = 0; y > B; B++) f += ZX81_TO_ASCII[u[B]];
                        f += ZX81_TO_ASCII[u[y] - 128], this.addTrack(f, u.subarray(y + 1, u.length))
                    } else {
                        if (48 != r) return void console.log("Unsupported TZX Block ID: " + r);
                        e.skip(e.getNextBytesAsNumber(1))
                    }
                }
        }
    };
