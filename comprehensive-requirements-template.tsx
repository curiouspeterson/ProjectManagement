import React, { useState } from 'react';

const ComprehensiveRequirementsTemplate = () => {
  // State for form data
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectObjectives: '',
    projectScope: '',
    stakeholders: [{ name: '', role: '', department: '', contact: '', influence: '' }],
    functionalRequirements: [{ id: '', description: '', priority: '', source: '', rationale: '', acceptanceCriteria: '' }],
    nonFunctionalRequirements: { performance: '', security: '', usability: '', reliability: '', scalability: '', compliance: '' },
    businessRules: [{ id: '', description: '', relatedFunctionalRequirements: '' }],
    constraints: { technical: '', budget: '', time: '', resource: '', legal: '' },
    assumptionsDependencies: { assumptions: '', internalDependencies: '', externalDependencies: '' },
    useCases: [{ actor: '', scenario: '', steps: '', outcome: '' }],
    dataRequirements: { elements: '', relationships: '', volume: '', retention: '' },
    interfaceRequirements: { userInterfaces: '', systemInterfaces: '', hardwareInterfaces: '' },
    reportingRequirements: [{ name: '', purpose: '', keyDataElements: '', frequency: '' }],
    securityAccessRequirements: { roles: '', accessLevels: '', authentication: '', authorization: '' },
    performanceExpectations: { responseTime: '', throughput: '', capacity: '', availability: '' },
    qualityAttributes: { reliability: '', maintainability: '', portability: '', scalability: '' },
    glossary: [{ term: '', definition: '' }],
    signOff: [{ name: '', role: '', signature: '', date: '' }],
    revisionHistory: [{ version: '', date: '', description: '', changedBy: '' }]
  });

  // Handler for form data changes
  const handleChange = (section: string, field: string, value: any, index?: number) => {
    setFormData(prevState => {
      if (index !== undefined) {
        const updatedSection = prevState[section].map((item, idx) => (idx === index ? { ...item, [field]: value } : item));
        return { ...prevState, [section]: updatedSection };
      }
      return { ...prevState, [section]: { ...prevState[section], [field]: value } };
    });
  };

  // Handler for adding new items in list sections
  const addNewItem = (section: string) => {
    setFormData(prevState => {
      const newItem = Object.keys(prevState[section][0]).reduce((acc, key) => ({ ...acc, [key]: '' }), {});
      return { ...prevState, [section]: [...prevState[section], newItem] };
    });
  };

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Comprehensive Requirements Template</h1>

      <section>
        <h2>Project Overview</h2>
        <input type="text" placeholder="Project Name" value={formData.projectName} onChange={e => handleChange('projectName', 'projectName', e.target.value)} />
        <textarea placeholder="Project Description" value={formData.projectDescription} onChange={e => handleChange('projectDescription', 'projectDescription', e.target.value)} />
        <textarea placeholder="Project Objectives" value={formData.projectObjectives} onChange={e => handleChange('projectObjectives', 'projectObjectives', e.target.value)} />
        <textarea placeholder="Project Scope" value={formData.projectScope} onChange={e => handleChange('projectScope', 'projectScope', e.target.value)} />
      </section>

      <section>
        <h2>Stakeholder Information</h2>
        {formData.stakeholders.map((stakeholder, index) => (
          <div key={index}>
            <input type="text" placeholder="Stakeholder Name" value={stakeholder.name} onChange={e => handleChange('stakeholders', 'name', e.target.value, index)} />
            <input type="text" placeholder="Role/Title" value={stakeholder.role} onChange={e => handleChange('stakeholders', 'role', e.target.value, index)} />
            <input type="text" placeholder="Department/Organization" value={stakeholder.department} onChange={e => handleChange('stakeholders', 'department', e.target.value, index)} />
            <input type="text" placeholder="Contact Information" value={stakeholder.contact} onChange={e => handleChange('stakeholders', 'contact', e.target.value, index)} />
            <input type="text" placeholder="Level of Influence/Interest" value={stakeholder.influence} onChange={e => handleChange('stakeholders', 'influence', e.target.value, index)} />
          </div>
        ))}
        <button type="button" onClick={() => addNewItem('stakeholders')}>Add Stakeholder</button>
      </section>

      <section>
        <h2>Functional Requirements</h2>
        {formData.functionalRequirements.map((requirement, index) => (
          <div key={index}>
            <input type="text" placeholder="Requirement ID" value={requirement.id} onChange={e => handleChange('functionalRequirements', 'id', e.target.value, index)} />
            <textarea placeholder="Requirement Description" value={requirement.description} onChange={e => handleChange('functionalRequirements', 'description', e.target.value, index)} />
            <input type="text" placeholder="Priority" value={requirement.priority} onChange={e => handleChange('functionalRequirements', 'priority', e.target.value, index)} />
            <input type="text" placeholder="Source" value={requirement.source} onChange={e => handleChange('functionalRequirements', 'source', e.target.value, index)} />
            <textarea placeholder="Rationale" value={requirement.rationale} onChange={e => handleChange('functionalRequirements', 'rationale', e.target.value, index)} />
            <textarea placeholder="Acceptance Criteria" value={requirement.acceptanceCriteria} onChange={e => handleChange('functionalRequirements', 'acceptanceCriteria', e.target.value, index)} />
          </div>
        ))}
        <button type="button" onClick={() => addNewItem('functionalRequirements')}>Add Functional Requirement</button>
      </section>

      <section>
        <h2>Non-Functional Requirements</h2>
        <textarea placeholder="Performance Requirements" value={formData.nonFunctionalRequirements.performance} onChange={e => handleChange('nonFunctionalRequirements', 'performance', e.target.value)} />
        <textarea placeholder="Security Requirements" value={formData.nonFunctionalRequirements.security} onChange={e => handleChange('nonFunctionalRequirements', 'security', e.target.value)} />
        <textarea placeholder="Usability Requirements" value={formData.nonFunctionalRequirements.usability} onChange={e => handleChange('nonFunctionalRequirements', 'usability', e.target.value)} />
        <textarea placeholder="Reliability Requirements" value={formData.nonFunctionalRequirements.reliability} onChange={e => handleChange('nonFunctionalRequirements', 'reliability', e.target.value)} />
        <textarea placeholder="Scalability Requirements" value={formData.nonFunctionalRequirements.scalability} onChange={e => handleChange('nonFunctionalRequirements', 'scalability', e.target.value)} />
        <textarea placeholder="Compliance Requirements" value={formData.nonFunctionalRequirements.compliance} onChange={e => handleChange('nonFunctionalRequirements', 'compliance', e.target.value)} />
      </section>

      <section>
        <h2>Business Rules</h2>
        {formData.businessRules.map((rule, index) => (
          <div key={index}>
            <input type="text" placeholder="Rule ID" value={rule.id} onChange={e => handleChange('businessRules', 'id', e.target.value, index)} />
            <textarea placeholder="Rule Description" value={rule.description} onChange={e => handleChange('businessRules', 'description', e.target.value, index)} />
            <textarea placeholder="Related Functional Requirements" value={rule.relatedFunctionalRequirements} onChange={e => handleChange('businessRules', 'relatedFunctionalRequirements', e.target.value, index)} />
          </div>
        ))}
        <button type="button" onClick={() => addNewItem('businessRules')}>Add Business Rule</button>
      </section>

      <section>
        <h2>Constraints</h2>
        <textarea placeholder="Technical Constraints" value={formData.constraints.technical} onChange={e => handleChange('constraints', 'technical', e.target.value)} />
        <textarea placeholder="Budget Constraints" value={formData.constraints.budget} onChange={e => handleChange('constraints', 'budget', e.target.value)} />
        <textarea placeholder="Time Constraints" value={formData.constraints.time} onChange={e => handleChange('constraints', 'time', e.target.value)} />
        <textarea placeholder="Resource Constraints" value={formData.constraints.resource} onChange={e => handleChange('constraints', 'resource', e.target.value)} />
        <textarea placeholder="Legal/Regulatory Constraints" value={formData.constraints.legal} onChange={e => handleChange('constraints', 'legal', e.target.value)} />
      </section>

      <section>
        <h2>Assumptions and Dependencies</h2>
        <textarea placeholder="List of Assumptions" value={formData.assumptionsDependencies.assumptions} onChange={e => handleChange('assumptionsDependencies', 'assumptions', e.target.value)} />
        <textarea placeholder="Internal Dependencies" value={formData.assumptionsDependencies.internalDependencies} onChange={e => handleChange('assumptionsDependencies', 'internalDependencies', e.target.value)} />
        <textarea placeholder="External Dependencies" value={formData.assumptionsDependencies.externalDependencies} onChange={e => handleChange('assumptionsDependencies', 'externalDependencies', e.target.value)} />
      </section>

      <section>
        <h2>Use Cases/User Stories</h2>
        {formData.useCases.map((useCase, index) => (
          <div key={index}>
            <input type="text" placeholder="Actor/User" value={useCase.actor} onChange={e => handleChange('useCases', 'actor', e.target.value, index)} />
            <textarea placeholder="Scenario Description" value={useCase.scenario} onChange={e => handleChange('useCases', 'scenario', e.target.value, index)} />
            <textarea placeholder="Steps/Flow" value={useCase.steps} onChange={e => handleChange('useCases', 'steps', e.target.value, index)} />
            <textarea placeholder="Expected Outcome" value={useCase.outcome} onChange={e => handleChange('useCases', 'outcome', e.target.value, index)} />
          </div>
        ))}
        <button type="button" onClick={() => addNewItem('useCases')}>Add Use Case</button>
      </section>

      <section>
        <h2>Data Requirements</h2>
        <textarea placeholder="Data Elements" value={formData.dataRequirements.elements} onChange={e => handleChange('dataRequirements', 'elements', e.target.value)} />
        <textarea placeholder="Data Relationships" value={formData.dataRequirements.relationships} onChange={e => handleChange('dataRequirements', 'relationships', e.target.value)} />
        <textarea placeholder="Data Volume" value={formData.dataRequirements.volume} onChange={e => handleChange('dataRequirements', 'volume', e.target.value)} />
        <textarea placeholder="Data Retention Requirements" value={formData.dataRequirements.retention} onChange={e => handleChange('dataRequirements', 'retention', e.target.value)} />
      </section>

      <section>
        <h2>Interface Requirements</h2>
        <textarea placeholder="User Interfaces" value={formData.interfaceRequirements.userInterfaces} onChange={e => handleChange('interfaceRequirements', 'userInterfaces', e.target.value)} />
        <textarea placeholder="System Interfaces" value={formData.interfaceRequirements.systemInterfaces} onChange={e => handleChange('interfaceRequirements', 'systemInterfaces', e.target.value)} />
        <textarea placeholder="Hardware Interfaces" value={formData.interfaceRequirements.hardwareInterfaces} onChange={e => handleChange('interfaceRequirements', 'hardwareInterfaces', e.target.value)} />
      </section>

      <section>
        <h2>Reporting Requirements</h2>
        {formData.reportingRequirements.map((report, index) => (
          <div key={index}>
            <input type="text" placeholder="Report Name" value={report.name} onChange={e => handleChange('reportingRequirements', 'name', e.target.value, index)} />
            <textarea placeholder="Purpose" value={report.purpose} onChange={e => handleChange('reportingRequirements', 'purpose', e.target.value, index)} />
            <textarea placeholder="Key Data Elements" value={report.keyDataElements} onChange={e => handleChange('reportingRequirements', 'keyDataElements', e.target.value, index)} />
            <input type="text" placeholder="Frequency" value={report.frequency} onChange={e => handleChange('reportingRequirements', 'frequency', e.target.value, index)} />
          </div>
        ))}
        <button type="button" onClick={() => addNewItem('reportingRequirements')}>Add Reporting Requirement</button>
      </section>

      <section>
        <h2>Security and Access Requirements</h2>
        <textarea placeholder="User Roles" value={formData.securityAccessRequirements.roles} onChange={e => handleChange('securityAccessRequirements', 'roles', e.target.value)} />
        <textarea placeholder="Access Levels" value={formData.securityAccessRequirements.accessLevels} onChange={e => handleChange('securityAccessRequirements', 'accessLevels', e.target.value)} />
        <textarea placeholder="Authentication Requirements" value={formData.securityAccessRequirements.authentication} onChange={e => handleChange('securityAccessRequirements', 'authentication', e.target.value)} />
        <textarea placeholder="Authorization Requirements" value={formData.securityAccessRequirements.authorization} onChange={e => handleChange('securityAccessRequirements', 'authorization', e.target.value)} />
      </section>

      <section>
        <h2>Performance Expectations</h2>
        <textarea placeholder="Response Time" value={formData.performanceExpectations.responseTime} onChange={e => handleChange('performanceExpectations', 'responseTime', e.target.value)} />
        <textarea placeholder="Throughput" value={formData.performanceExpectations.throughput} onChange={e => handleChange('performanceExpectations', 'throughput', e.target.value)} />
        <textarea placeholder="Capacity" value={formData.performanceExpectations.capacity} onChange={e => handleChange('performanceExpectations', 'capacity', e.target.value)} />
        <textarea placeholder="Availability" value={formData.performanceExpectations.availability} onChange={e => handleChange('performanceExpectations', 'availability', e.target.value)} />
      </section>

      <section>
        <h2>Quality Attributes</h2>
        <textarea placeholder="Reliability" value={formData.qualityAttributes.reliability} onChange={e => handleChange('qualityAttributes', 'reliability', e.target.value)} />
        <textarea placeholder="Maintainability" value={formData.qualityAttributes.maintainability} onChange={e => handleChange('qualityAttributes', 'maintainability', e.target.value)} />
        <textarea placeholder="Portability" value={formData.qualityAttributes.portability} onChange={e => handleChange('qualityAttributes', 'portability', e.target.value)} />
        <textarea placeholder="Scalability" value={formData.qualityAttributes.scalability} onChange={e => handleChange('qualityAttributes', 'scalability', e.target.value)} />
      </section>

      <section>
        <h2>Glossary</h2>
        {formData.glossary.map((term, index) => (
          <div key={index}>
            <input type="text" placeholder="Term" value={term.term} onChange={e => handleChange('glossary', 'term', e.target.value, index)} />
            <textarea placeholder="Definition" value={term.definition} onChange={e => handleChange('glossary', 'definition', e.target.value, index)} />
          </div>
        ))}
        <button type="button" onClick={() => addNewItem('glossary')}>Add Glossary Term</button>
      </section>

      <section>
        <h2>Sign-off Section</h2>
        {formData.signOff.map((signOff, index) => (
          <div key={index}>
            <input type="text" placeholder="Stakeholder Name" value={signOff.name} onChange={e => handleChange('signOff', 'name', e.target.value, index)} />
            <input type="text" placeholder="Role" value={signOff.role} onChange={e => handleChange('signOff', 'role', e.target.value, index)} />
            <input type="text" placeholder="Signature" value={signOff.signature} onChange={e => handleChange('signOff', 'signature', e.target.value, index)} />
            <input type="date" placeholder="Date" value={signOff.date} onChange={e => handleChange('signOff', 'date', e.target.value, index)} />
          </div>
        ))}
        <button type="button" onClick={() => addNewItem('signOff')}>Add Sign-off</button>
      </section>

      <section>
        <h2>Revision History</h2>
        {formData.revisionHistory.map((revision, index) => (
          <div key={index}>
            <input type="text" placeholder="Version Number" value={revision.version} onChange={e => handleChange('revisionHistory', 'version', e.target.value, index)} />
            <input type="date" placeholder="Date of Change" value={revision.date} onChange={e => handleChange('revisionHistory', 'date', e.target.value, index)} />
            <textarea placeholder="Description of Change" value={revision.description} onChange={e => handleChange('revisionHistory', 'description', e.target.value, index)} />
            <input type="text" placeholder="Changed By" value={revision.changedBy} onChange={e => handleChange('revisionHistory', 'changedBy', e.target.value, index)} />
          </div>
        ))}
        <button type="button" onClick={() => addNewItem('revisionHistory')}>Add Revision</button>
      </section>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ComprehensiveRequirementsTemplate;
