(exports => {
  "use strict";

  const topologicalSort = (() => {
    function topologicalSortHelper(node, visited, temp, graph, result) {
      temp[node] = true;
      const neighbors = graph[node];

      neighbors.forEach(n => {
        if (temp[n]) {
          throw new Error("The graph is not a DAG");
        }
        if (!visited[n]) {
          topologicalSortHelper(n, visited, temp, graph, result);
        }
      });

      temp[node] = false;
      visited[node] = true;
      result.push(node);
    }

    /**
     * Topological sort algorithm of a directed acyclic graph.<br><br>
     * Time complexity: O(|E| + |V|) where E is a number of edges
     * and |V| is the number of nodes.
     *
     * @public
     * @module graphs/others/topological-sort
     * @param {Array} graph Adjacency list, which represents the graph.
     * @returns {Array} Ordered vertices.
     *
     * @example
     * var topsort =
     *  require('path-to-algorithms/src/graphs/' +
     * 'others/topological-sort').topologicalSort;
     * var graph = {
     *     v1: ['v2', 'v5'],
     *     v2: [],
     *     v3: ['v1', 'v2', 'v4', 'v5'],
     *     v4: [],
     *     v5: []
     * };
     * var vertices = topsort(graph); // ['v3', 'v4', 'v1', 'v5', 'v2']
     */
    return graph => {
      const result = [];
      const visited = [];
      const temp = [];
      for (const node in graph) {
        if (!visited[node] && !temp[node]) {
          topologicalSortHelper(node, visited, temp, graph, result);
        }
      }
      return result.reverse();
    };
  })();

  exports.topologicalSort = topologicalSort;
})(typeof exports === "undefined" ? window : exports);
