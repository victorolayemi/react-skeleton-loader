<h1>React Skeleton Loader</h1>

<p>A lightweight, customizable React component for rendering skeleton loaders while content is loading.</p>

<p>
  <img src="https://img.shields.io/npm/v/react-skeleton-loaders?style=flat-square" alt="npm version" />
  <img src="https://img.shields.io/npm/l/react-skeleton-loaders?style=flat-square" alt="license" />
  <img src="https://img.shields.io/npm/dm/react-skeleton-loaders?style=flat-square" alt="downloads" />
</p>

<hr />

<h2>✨ Features</h2>
<ul>
  <li>Lightweight & customizable</li>
  <li>Built-in pulse animation</li>
  <li>Supports circle and rectangular shapes</li>
  <li>Easily stylable via <code>className</code> and <code>style</code></li>
</ul>

<h2>📦 Installation</h2>

<pre><code>npm install react-skeleton-loaders
</code></pre>

<pre><code>yarn add react-skeleton-loaders
</code></pre>

<h2>🚀 Usage</h2>

<pre><code class="language-tsx">
import React from 'react';
import Skeleton from 'react-skeleton-loaders';

const MyComponent = () => {
  return (
    &lt;div&gt;
      &lt;Skeleton width="100%" height="20px" /&gt;
      &lt;Skeleton width="60%" height="20px" style={{ marginTop: 10 }} /&gt;
      &lt;Skeleton circle width="40px" height="40px" /&gt;
    &lt;/div&gt;
  );
};
</code></pre>

<h2>⚙️ Props</h2>

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>width</code></td>
      <td><code>string | number</code></td>
      <td><code>100%</code></td>
      <td>Width of the skeleton</td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td><code>string | number</code></td>
      <td><code>1rem</code></td>
      <td>Height of the skeleton</td>
    </tr>
    <tr>
      <td><code>circle</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Makes the skeleton a circle</td>
    </tr>
    <tr>
      <td><code>className</code></td>
      <td><code>string</code></td>
      <td><code>""</code></td>
      <td>Custom class for styling</td>
    </tr>
    <tr>
      <td><code>style</code></td>
      <td><code>React.CSSProperties</code></td>
      <td><code>{}</code></td>
      <td>Inline styles</td>
    </tr>
  </tbody>
</table>

<h2>🧪 Development</h2>

<pre><code>npm run build
</code></pre>

<h2>📝 License</h2>

<p>MIT License © <a href="https://github.com/victorolayemi">Victor Olayemi</a></p>
