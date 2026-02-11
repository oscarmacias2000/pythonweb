import 'bootstrap/dist/css/bootstrap.min.css'


export default function Http() {
    return (
        <div className="container" style={{ backgroundColor: "rgba(197, 190, 190, 1)" }}>
            <div className="language-msf highlighter-rouge position-relative h-100 w-100 mt-5 mb-5 justify-content-center align-items-center"><div className="highlight"><pre className="highlight"><code><span className="zp">msf</span> <span className="p">&gt;</span> use scanner/http/title
                <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> set RHOSTS 127.0.0.1<font></font>
                RHOSTS =&gt; 127.0.0.1<font></font>
                <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> set HttpTrace true<font></font>
                HttpTrace =&gt; true<font></font>
                <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> run<font></font>
                <font></font>
                <br />
                <br />
                ####################<font></font>
                # Request:<font></font>
                ####################<font></font>
                <br />
                <br />
                GET / HTTP/1.1<font></font>
                Host: 127.0.0.1<font></font>
                User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)<font></font>
                <font></font>
                <font></font>
                <br />
                <br />
                ####################<font></font>
                # Response:<font></font>
                ####################<font></font>
                <br />
                <br />
                HTTP/1.0 200 OK<font></font>
                Server: SimpleHTTP/0.6 Python/2.7.16<font></font>
                Date: Wed, 16 Dec 2020 01:16:32 GMT<font></font>
                Content-type: text/html; charset=utf-8<font></font>
                Content-Length: 178<font></font>
                <font></font>
                <font></font>
                <br />
                <br />
                &lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN"&gt;&lt;html&gt;<font></font>
                &lt;title&gt;Directory listing for /&lt;/title&gt;<font></font>
                &lt;body&gt;<font></font>
                &lt;h2&gt;Directory listing for /&lt;/h2&gt;<font></font>
                &lt;hr&gt;<font></font>
                &lt;ul&gt;<font></font>
                &lt;/ul&gt;<font></font>
                &lt;hr&gt;<font></font>
                &lt;/body&gt;<font></font>
                &lt;/html&gt;<font></font>
                <font></font>
                <font></font>
                <br />
                <br />
                <span className="zg">[+]</span> [127.0.0.1:80] [C:200] [R:] [S:SimpleHTTP/0.6 Python/2.7.16] Directory listing for /
                <br />
                <br />
                <span className="zs">[*]</span> Scanned 1 of 1 hosts (100% complete)
                <br />
                <br />
                <span className="zs">[*]</span> Auxiliary module execution completed
                <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span>
            </code></pre></div></div>
            <div className="language-msf highlighter-rouge position-relative h-100 w-100 mt-5 mb-5 justify-content-center align-items-center"><div className="highlight"><pre className="highlight"><code><span className="zp">msf</span> <span className="p">&gt;</span> use scanner/http/title
                <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> set RHOSTS 127.0.0.1<font></font>
                RHOSTS =&gt; 127.0.0.1<font></font>
                <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> set HttpTrace true<font></font>
                HttpTrace =&gt; true<font></font>
                <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> run<font></font>
                <font></font>
                <br />
                <br />
                ####################<font></font>
                # Request:<font></font>
                ####################<font></font>
                <br />
                <br />
                GET / HTTP/1.1<font></font>
                Host: 127.0.0.1<font></font>
                User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)<font></font>
                <font></font>
                <font></font>
                <br />
                <br />
                ####################<font></font>
                # Response:<font></font>
                ####################<font></font>
                <br />
                <br />
                HTTP/1.0 200 OK<font></font>
                Server: SimpleHTTP/0.6 Python/2.7.16<font></font>
                Date: Wed, 16 Dec 2020 01:16:32 GMT<font></font>
                Content-type: text/html; charset=utf-8<font></font>
                Content-Length: 178<font></font>
                <font></font>
                <font></font>
                <br />
                <br />
                &lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN"&gt;&lt;html&gt;<font></font>
                &lt;title&gt;Directory listing for /&lt;/title&gt;<font></font>
                &lt;body&gt;<font></font>
                &lt;h2&gt;Directory listing for /&lt;/h2&gt;<font></font>
                &lt;hr&gt;<font></font>
                &lt;ul&gt;<font></font>
                &lt;/ul&gt;<font></font>
                &lt;hr&gt;<font></font>
                &lt;/body&gt;<font></font>
                &lt;/html&gt;<font></font>
                <font></font>
                <font></font>
                <br />
                <br />
                <span className="zg">[+]</span> [127.0.0.1:80] [C:200] [R:] [S:SimpleHTTP/0.6 Python/2.7.16] Directory listing for /
                <br />
                <br />
                <span className="zs">[*]</span> Scanned 1 of 1 hosts (100% complete)
                <br />
                <br />
                <span className="zs">[*]</span> Auxiliary module execution completed
                <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span>
            </code></pre></div></div>
        </div>
    )
}