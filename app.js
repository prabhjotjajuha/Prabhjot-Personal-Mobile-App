  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>PGCompass/www/scripts/app.js at master · Rockncoder/PGCompass · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="assets" href="https://a248.e.akamai.net/assets.github.com/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="YxUJQOAZzLVDfp3tgeaZQAJ7oGRiYOwpHnYJ1Hfc+fQ=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-28cb64109a7ebb60276b297a5459cd080aa82add.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-e1a0497e3f27f8cca11d34857d24a13a28b4f6a9.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-4c434fa1705bf526e191eec0cd8fab1a5ce3e326.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-2807f7a14cfa07e4863ccfb987303e8d570d1851.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="d7a209e69ec37686567e49126fc75bc7">

        <link data-pjax-transient rel='permalink' href='/Rockncoder/PGCompass/blob/d27239382db224446339e4a56cb72079230e1965/www/scripts/app.js'>
    <meta property="og:title" content="PGCompass"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/Rockncoder/PGCompass"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/ebebe78b0f87e609598e62f4315adc8c?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="PGCompass - PhoneGap &amp; jQuery Mobile compass tutorial source code"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="Rockncoder/PGCompass"/>

    <meta name="description" content="PGCompass - PhoneGap &amp; jQuery Mobile compass tutorial source code" />


    <meta content="1497092" name="octolytics-dimension-user_id" /><meta content="Rockncoder" name="octolytics-dimension-user_login" /><meta content="4860858" name="octolytics-dimension-repository_id" /><meta content="Rockncoder/PGCompass" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4860858" name="octolytics-dimension-repository_network_root_id" /><meta content="Rockncoder/PGCompass" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Rockncoder/PGCompass/commits/master.atom" rel="alternate" title="Recent Commits to PGCompass:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob macintosh vis-public env-production  ">
    <div id="wrapper">

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
      <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2FRockncoder%2FPGCompass%2Fblob%2Fmaster%2Fwww%2Fscripts%2Fapp.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="http://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
      data-repo="Rockncoder/PGCompass"
      data-branch="master"
      data-sha="b02fa2280a465c8240a0489ed7e52dc6b634bdf9"
  >

    <input type="hidden" name="nwo" value="Rockncoder/PGCompass" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
    </div>

  </div>
</div>


      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2FRockncoder%2FPGCompass"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/Rockncoder/PGCompass/stargazers">
        16
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2FRockncoder%2FPGCompass"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/Rockncoder/PGCompass/network" class="social-count">
        13
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/Rockncoder" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">Rockncoder</span>
                  </a></span> /
                <strong><a href="/Rockncoder/PGCompass" class="js-current-repository">PGCompass</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/Rockncoder/PGCompass/pulse" class="js-selected-navigation-item " data-selected-links="pulse /Rockncoder/PGCompass/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/Rockncoder/PGCompass" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /Rockncoder/PGCompass">Code</a></li>
    <li><a href="/Rockncoder/PGCompass/network" class="js-selected-navigation-item " data-selected-links="repo_network /Rockncoder/PGCompass/network">Network</a></li>
    <li><a href="/Rockncoder/PGCompass/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /Rockncoder/PGCompass/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/Rockncoder/PGCompass/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /Rockncoder/PGCompass/issues">Issues <span class='counter'>0</span></a></li>



    <li><a href="/Rockncoder/PGCompass/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /Rockncoder/PGCompass/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/Rockncoder/PGCompass/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /Rockncoder/PGCompass/tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-git-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/Rockncoder/PGCompass/blob/master/www/scripts/app.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/Rockncoder/PGCompass" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /Rockncoder/PGCompass">Files</a></li>
    <li><a href="/Rockncoder/PGCompass/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /Rockncoder/PGCompass/commits/master">Commits</a></li>
    <li><a href="/Rockncoder/PGCompass/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /Rockncoder/PGCompass/branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:621d5378e4b32d54f4aae4426cd189b6 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:621d5378e4b32d54f4aae4426cd189b6 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Rockncoder/PGCompass" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">PGCompass</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Rockncoder/PGCompass/tree/master/www" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">www</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Rockncoder/PGCompass/tree/master/www/scripts" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">scripts</span></a></span><span class="separator"> / </span><strong class="final-path">app.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="www/scripts/app.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/Rockncoder/PGCompass/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/ebebe78b0f87e609598e62f4315adc8c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/Rockncoder" rel="author">Rockncoder</a></span>
    <time class="js-relative-date" datetime="2012-07-02T07:37:09-07:00" title="2012-07-02 07:37:09">July 02, 2012</time>
    <div class="commit-title">
        <a href="/Rockncoder/PGCompass/commit/0abee939a8b431c8c914500b3433986749d3d89c" class="message">Initial check in of tutorial code.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/ebebe78b0f87e609598e62f4315adc8c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/Rockncoder">Rockncoder</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/Rockncoder/PGCompass/blob/d27239382db224446339e4a56cb72079230e1965/www/scripts/app.js" data-title="PGCompass/www/scripts/app.js at master · Rockncoder/PGCompass · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>48 lines (45 sloc)</span>
                <span>1.711 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/Rockncoder/PGCompass/raw/master/www/scripts/app.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/Rockncoder/PGCompass/blame/master/www/scripts/app.js" class="button minibutton ">Blame</a>
                  <a href="/Rockncoder/PGCompass/commits/master/www/scripts/app.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// next two lines for JS-Lint</span></div><div class='line' id='LC2'><span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC3'><span class="kd">var</span> <span class="nx">$</span><span class="p">,</span> <span class="nx">navigator</span><span class="p">,</span> <span class="nx">alert</span><span class="p">,</span> <span class="nb">document</span><span class="p">;</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="c1">// create our namespace</span></div><div class='line' id='LC6'><span class="kd">var</span> <span class="nx">RocknCoder</span> <span class="o">=</span> <span class="nx">RocknCoder</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="c1">// event handlers for the compass stuff,</span></div><div class='line' id='LC9'><span class="c1">// one for updating the header text</span></div><div class='line' id='LC10'><span class="c1">// the other for rotating the compass</span></div><div class='line' id='LC11'><span class="nx">RocknCoder</span><span class="p">.</span><span class="nx">Compass</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC12'>	<span class="kd">var</span> <span class="nx">lastHeading</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC13'>		<span class="c1">// cache the jQuery selectors</span></div><div class='line' id='LC14'>		<span class="nx">$headText</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;header &gt; h1&quot;</span><span class="p">),</span></div><div class='line' id='LC15'>		<span class="nx">$compass</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#compass&quot;</span><span class="p">),</span></div><div class='line' id='LC16'>		<span class="c1">// displays the degree</span></div><div class='line' id='LC17'>		<span class="nx">updateHeadingText</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">heading</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC18'>			<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC19'>			<span class="nx">$headText</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">heading</span> <span class="o">+</span> <span class="s2">&quot;&amp;deg;&quot;</span><span class="p">);</span></div><div class='line' id='LC20'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC21'>		<span class="p">},</span></div><div class='line' id='LC22'>		<span class="c1">// adjusts the rotation of the compass</span></div><div class='line' id='LC23'>		<span class="nx">updateCompass</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">heading</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'>			<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC25'>			<span class="c1">// to make the compass dial point the right way</span></div><div class='line' id='LC26'>			<span class="kd">var</span> <span class="nx">rotation</span> <span class="o">=</span> <span class="mi">360</span> <span class="o">-</span> <span class="nx">heading</span><span class="p">,</span></div><div class='line' id='LC27'>				<span class="nx">rotateDeg</span> <span class="o">=</span> <span class="s1">&#39;rotate(&#39;</span> <span class="o">+</span> <span class="nx">rotation</span> <span class="o">+</span> <span class="s1">&#39;deg)&#39;</span><span class="p">;</span></div><div class='line' id='LC28'>			<span class="c1">// TODO: fix - this code only works on webkit browsers, not wp7</span></div><div class='line' id='LC29'>			<span class="nx">$compass</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;-webkit-transform&#39;</span><span class="p">,</span> <span class="nx">rotateDeg</span><span class="p">);</span></div><div class='line' id='LC30'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC31'>		<span class="p">};</span></div><div class='line' id='LC32'>	<span class="c1">// bind both of the event handlers to the &quot;newHeading&quot; event</span></div><div class='line' id='LC33'>	<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="s2">&quot;newHeading&quot;</span><span class="p">,</span> <span class="nx">updateCompass</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="s2">&quot;newHeading&quot;</span><span class="p">,</span> <span class="nx">updateHeadingText</span><span class="p">);</span></div><div class='line' id='LC34'><span class="p">}());</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'><span class="c1">// hook the compass watch</span></div><div class='line' id='LC37'><span class="c1">// normally I would un-hook an event, but this is a quick tutorial</span></div><div class='line' id='LC38'><span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;deviceready&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC39'>	<span class="nx">RocknCoder</span><span class="p">.</span><span class="nx">Compass</span><span class="p">.</span><span class="nx">watchId</span> <span class="o">=</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">compass</span><span class="p">.</span><span class="nx">watchHeading</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">heading</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>		<span class="c1">// only magnetic heading works universally on iOS and Android</span></div><div class='line' id='LC41'>		<span class="c1">// round off the heading then trigger newHeading event for any listeners</span></div><div class='line' id='LC42'>		<span class="kd">var</span> <span class="nx">newHeading</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">heading</span><span class="p">.</span><span class="nx">magneticHeading</span><span class="p">);</span></div><div class='line' id='LC43'>		<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;newHeading&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">newHeading</span><span class="p">]);</span></div><div class='line' id='LC44'>	<span class="p">},</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>		<span class="c1">// if we get an error, show its code</span></div><div class='line' id='LC46'>		<span class="nx">alert</span><span class="p">(</span><span class="s2">&quot;Compass error: &quot;</span> <span class="o">+</span> <span class="nx">error</span><span class="p">.</span><span class="nx">code</span><span class="p">);</span></div><div class='line' id='LC47'>	<span class="p">},</span> <span class="p">{</span><span class="nx">frequency</span> <span class="o">:</span> <span class="mi">100</span><span class="p">});</span></div><div class='line' id='LC48'><span class="p">});</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="/about">About us</a></dd>
        <dd><a href="/blog">Blog</a></dd>
        <dd><a href="/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.06144s from fe18.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="/site/terms">Terms of Service</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/Rockncoder/PGCompass/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    <span id='server_response_time' data-time='0.06182' data-host='fe18'></span>
    
  </body>
</html>

