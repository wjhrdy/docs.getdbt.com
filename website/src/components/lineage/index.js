import React from 'react'

let Dag = null;

try {
    /** As a private package, not every developer will have access to this repo. */
    const DagImport = require('@dbt-labs/react-dbt-dag');
    require('@dbt-labs/react-dbt-dag/dag.css');
    require('@dbt-labs/react-dbt-dag/dag.standalone.css');

    Dag = DagImport.Dag;
} catch (err) {
    /**
     * react-dbt-dag is a private repo. Not all developers of the
     * open source docs will have access to this repo.
     */
}

export const Lineage = ({ dagNodes, currentNodeId }) => {
    if (!Dag) {
        return <div>Lineage Not Available!</div>
    }

    return <Dag 
        nodes={dagNodes}
        toolbarItems={[]}
        primaryNodeId={currentNodeId} />
}