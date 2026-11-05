<main class="max-w-6xl mx-auto flex flex-col pb-24 px-4">
	<div class="overflow-x-auto">
		<table class="border-collapse border border-gray-400 w-full text-sm">
			<thead>
				<tr>
					<th class="border border-gray-300 p-4 text-left">Section Heading</th>
					<th class="border border-gray-300 p-4 text-left">Control Heading</th>
					<th class="border border-gray-300 p-4 text-left">ID</th>
					<th class="border border-gray-300 p-4 text-left">Question Text</th>
					<th class="border border-gray-300 p-4 text-left">Answer</th>
					<th class="border border-gray-300 p-4 text-left">Notes/Comment</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Application & Interface Security</td>
					<td class="border border-gray-300 p-4">Application Security</td>
					<td class="border border-gray-300 p-4">AIS-01.2</td>
					<td class="border border-gray-300 p-4">Do you use an automated source code analysis tool to detect security defects in code prior to production?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We automate the detection & update of vulnerable dependencies.&nbsp;<a href="/trust/security-scanning" class="font-semibold no-underline text-[var(--accent-cyan)] hover:text-[var(--action-hover)]">Review our security scanning practices</a>.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">AIS-01.5 (SaaS only)</td>
					<td class="border border-gray-300 p-4">Do you review your applications for security vulnerabilities and address any issues prior to deployment to production?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">All security defects found during review or testing are remediated prior to deployment to production.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Customer Access Requirements</td>
					<td class="border border-gray-300 p-4">AIS-02.1</td>
					<td class="border border-gray-300 p-4">Are all identified security, contractual, and regulatory requirements for customer access contractually addressed and remediated prior to granting customers access to data, assets, and information systems?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We provide full details of this via our customer agreement and privacy policy on our website.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Data Integrity</td>
					<td class="border border-gray-300 p-4">AIS-03.1</td>
					<td class="border border-gray-300 p-4">Does your data management policies and procedures require audits to verify data input and output integrity routines?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">Our software is built to check the validity of data input prior to ingestion and to sanitize API outputs. This is checked and audited via extensive end-to-end tests, human review, and penetration testing. We also fully rely on Jira's data integrity functionality as we do not store customer data on our own infrastructure.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Audit Assurance & Compliance</td>
					<td class="border border-gray-300 p-4">Independent Audits</td>
					<td class="border border-gray-300 p-4">AAC-02.1</td>
					<td class="border border-gray-300 p-4">Do you allow tenants to view your SOC2/ISO 27001 or similar third-party audit or certification reports?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We don't have SOC II or ISO 27001 audits yet, but we intend to make as much detail about our audits public as is safe & reasonable. We also have the ISO 27001 report of our service provider linked in our Trust Center.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">AAC-02.2</td>
					<td class="border border-gray-300 p-4">Do you conduct network penetration tests of your cloud service infrastructure at least annually?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">Find out more details about our Bug Bounty Program and other initiatives in the <a href="/trust" class="font-semibold no-underline text-[var(--accent-cyan)] hover:text-[var(--action-hover)]">Trust Center</a>.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">AAC-02.3</td>
					<td class="border border-gray-300 p-4">Do you conduct application penetration tests of your cloud infrastructure regularly as prescribed by industry best practices and guidance?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">Find out more details about our Bug Bounty Program and other initiatives in the <a href="/trust" class="font-semibold no-underline text-[var(--accent-cyan)] hover:text-[var(--action-hover)]">Trust Center</a>.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Information System Regulatory Mapping</td>
					<td class="border border-gray-300 p-4">AAC-03.1</td>
					<td class="border border-gray-300 p-4">Do you have a program in place that includes the ability to monitor changes to the regulatory requirements in relevant jurisdictions, adjust your security program for changes to legal requirements, and ensure compliance with relevant regulatory requirements?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We review the regulatory landscape on a quarterly basis and make changes to our internal policies & documentation as a result.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Business Continuity Management & Operational Resilience</td>
					<td class="border border-gray-300 p-4">Business Continuity Testing</td>
					<td class="border border-gray-300 p-4">BCR-02.1</td>
					<td class="border border-gray-300 p-4">Are business continuity plans subject to testing at planned intervals or upon significant organizational or environmental changes to ensure continuing effectiveness?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We review our business continuity plan on an annual basis (or upon significant organizational and environmental change) and make changes to our internal policies & documentation as a result.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Policy</td>
					<td class="border border-gray-300 p-4">BCR-10.1</td>
					<td class="border border-gray-300 p-4">Are policies and procedures established and made available for all personnel to adequately support services operations' roles?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">Continuously update our customer documentation, our internal documentation & staff training material. We use source control systems to store and publish these to ensure there is change tracking.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Retention Policy</td>
					<td class="border border-gray-300 p-4">BCR-11.1</td>
					<td class="border border-gray-300 p-4">Do you have technical capabilities to enforce tenant data retention policies?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We retain installation data provided to us. However, as we do not host customer data, most of the obligation lies with Atlassian.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">BCR-11.3</td>
					<td class="border border-gray-300 p-4">Have you implemented backup or recovery mechanisms to ensure compliance with regulatory, statutory, contractual or business requirements?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We regularly backup installation data in order to ensure continuous operation for our customers</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">BCR-11.7</td>
					<td class="border border-gray-300 p-4">Do you test your backup or redundancy mechanisms at least annually?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Change Control & Configuration Management</td>
					<td class="border border-gray-300 p-4">Unauthorized Software Installations</td>
					<td class="border border-gray-300 p-4">CCC-04.1</td>
					<td class="border border-gray-300 p-4">Do you have controls in place to restrict and monitor the installation of unauthorized software onto your systems?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We automate the provisioning of infrastructure we use to deliver our services and manual installation of software on these instances does not happen. We use container technologies to ensure that the application stack is consistent.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Datacenter Security</td>
					<td class="border border-gray-300 p-4">Asset Management</td>
					<td class="border border-gray-300 p-4">DCS-01.2</td>
					<td class="border border-gray-300 p-4">Do you maintain a complete inventory of all of your critical assets located at all sites/ or geographical locations and their assigned ownership?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We don't have a datacenter or any physical critical assets. Digitally critical assets and their ownership are listed in our business continuity plan.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Controlled Access Points</td>
					<td class="border border-gray-300 p-4">DCS-02.1</td>
					<td class="border border-gray-300 p-4">Are physical security perimeters (e.g., fences, walls, barriers, guards, gates, electronic surveillance, physical authentication mechanisms, reception desks, and security patrols) implemented for all areas housing sensitive data and information systems?</td>
					<td class="border border-gray-300 p-4">Not applicable</td>
					<td class="border border-gray-300 p-4">We are a remote first company and we do not house a data center or any other sensitive data or information systems.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">User Access</td>
					<td class="border border-gray-300 p-4">DCS-09.1</td>
					<td class="border border-gray-300 p-4">Do you restrict physical access to information assets and functions by users and support personnel?</td>
					<td class="border border-gray-300 p-4">Not applicable</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Encryption & Key Management</td>
					<td class="border border-gray-300 p-4">Encryption</td>
					<td class="border border-gray-300 p-4">EKM-03.1</td>
					<td class="border border-gray-300 p-4">Do you encrypt tenant data at rest (on disk/storage) within your environment?</td>
					<td class="border border-gray-300 p-4">Not applicable</td>
					<td class="border border-gray-300 p-4">We do not host any tenant data</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Governance and Risk Management</td>
					<td class="border border-gray-300 p-4">Policy</td>
					<td class="border border-gray-300 p-4">GRM-06.1</td>
					<td class="border border-gray-300 p-4">Are your information security policies and procedures made available to all impacted personnel and business partners, authorized by accountable business role/function and supported by the information security management program as per industry best practices (e.g. ISO 27001, SOC 2)?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">You can find our public Information Security Policy in the <a href="/trust" class="font-semibold no-underline text-[var(--accent-cyan)] hover:text-[var(--action-hover)]">Trust Center</a></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Policy Enforcement</td>
					<td class="border border-gray-300 p-4">GRM-07.1</td>
					<td class="border border-gray-300 p-4">Is a formal disciplinary or sanction policy established for employees who have violated security policies and procedures?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">These actions are enforced by our employment contracts and defined in our policies.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Policy Reviews</td>
					<td class="border border-gray-300 p-4">GRM-09.1</td>
					<td class="border border-gray-300 p-4">Do you notify your tenant's when you make material changes to your information security and/or privacy policies?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">GRM-09.2</td>
					<td class="border border-gray-300 p-4">Do you perform, at minimum, annual reviews to your privacy and security policies?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Human Resources</td>
					<td class="border border-gray-300 p-4">Asset Returns</td>
					<td class="border border-gray-300 p-4">HRS-01.1</td>
					<td class="border border-gray-300 p-4">Upon termination of contract or business relationship, are employees and business partners adequately informed of their obligations for returning organizationally-owned assets?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Background Screening</td>
					<td class="border border-gray-300 p-4">HRS-02.1</td>
					<td class="border border-gray-300 p-4">Pursuant to local laws, regulations, ethics, and contractual constraints, are all employment candidates, contractors, and involved third parties subject to background verification?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Employment Agreements</td>
					<td class="border border-gray-300 p-4">HRS-03.1</td>
					<td class="border border-gray-300 p-4">Do your employment agreements incorporate provisions and/or terms in adherence to established information governance and security policies?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Employment Termination</td>
					<td class="border border-gray-300 p-4">HRS-04.1</td>
					<td class="border border-gray-300 p-4">Are documented policies, procedures, and guidelines in place to govern change in employment and/or termination?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Training / Awareness</td>
					<td class="border border-gray-300 p-4">HRS-09.5</td>
					<td class="border border-gray-300 p-4">Are personnel trained and provided with awareness programs at least once a year?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Identity & Access Management</td>
					<td class="border border-gray-300 p-4">Audit Tools Access</td>
					<td class="border border-gray-300 p-4">IAM-01.1</td>
					<td class="border border-gray-300 p-4">Do you restrict, log, and monitor access to your information security management systems (e.g., hypervisors, firewalls, vulnerability scanners, network sniffers, APIs, etc.)?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">Only authorized engineers are granted access to our information security systems.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">User Access Policy</td>
					<td class="border border-gray-300 p-4">IAM-02.1</td>
					<td class="border border-gray-300 p-4">Do you have controls in place ensuring timely removal of systems access that is no longer required for business purposes?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We have an offboarding plan for staff that leave, only authorized engineers are able to access the production environment.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Policies and Procedures</td>
					<td class="border border-gray-300 p-4">IAM-04.1</td>
					<td class="border border-gray-300 p-4">Do you manage and store the identity of all personnel who have access to the IT infrastructure, including their level of access?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Source Code Access Restriction</td>
					<td class="border border-gray-300 p-4">IAM-06.1</td>
					<td class="border border-gray-300 p-4">Are controls in place to prevent unauthorized access to your application, program, or object source code, and assure it is restricted to authorized personnel only?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">All of our source code is stored on cloud based source control providers. Only approved staff members are granted access to private repositories.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">User Access Restriction / Authorization</td>
					<td class="border border-gray-300 p-4">IAM-08.1</td>
					<td class="border border-gray-300 p-4">Do you document how you grant, approve and enforce access restrictions to tenant/customer credentials following the rules of least privilege?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We do not grant access to customer credentials in general. In support processes, customers can grant access to dedicated support staff.</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">User Access Revocation</td>
					<td class="border border-gray-300 p-4">IAM-11.1</td>
					<td class="border border-gray-300 p-4">Is timely deprovisioning, revocation, or modification of user access to the organizations systems, information assets, and data implemented upon any change in status of employees, contractors, customers, business partners, or involved third parties?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Security Incident Management, E-Discovery, & Cloud Forensics</td>
					<td class="border border-gray-300 p-4">Incident Management</td>
					<td class="border border-gray-300 p-4">SEF-02.1</td>
					<td class="border border-gray-300 p-4">Do you have a documented security incident response plan?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">This is required for us to comply with Atlassian's security policies</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Incident Reporting</td>
					<td class="border border-gray-300 p-4">SEF-03.1</td>
					<td class="border border-gray-300 p-4">Are workforce personnel and external business relationships adequately informed of their responsibility, and, if required, consent and/or contractually required to report all information security events in a timely manner?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">We have dedicated security contacts with Atlassian that are required to comply with this policy</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">SEF-03.2</td>
					<td class="border border-gray-300 p-4">Do you have predefined communication channels for workforce personnel and external business partners to report incidents in a timely manner adhering to applicable legal, statutory, or regulatory compliance obligations?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Supply Chain Management, Transparency, and Accountability</td>
					<td class="border border-gray-300 p-4">Incident Reporting</td>
					<td class="border border-gray-300 p-4">STA-02.1</td>
					<td class="border border-gray-300 p-4">Do you make security incident information available to all affected customers and providers periodically through electronic methods (e.g., portals)?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">Incident reports will be made available via email to dedicated customer technical contacts and through our website</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Third Party Agreements</td>
					<td class="border border-gray-300 p-4">STA-05.5</td>
					<td class="border border-gray-300 p-4">Do you have the capability to recover data for a specific customer in the case of a failure or data loss?</td>
					<td class="border border-gray-300 p-4">Not applicable</td>
					<td class="border border-gray-300 p-4">Data is not hosted by us and the restore needs to happen on the customer instance by Atlassian</td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4 font-bold">Threat and Vulnerability Management</td>
					<td class="border border-gray-300 p-4">Antivirus / Malicious Software</td>
					<td class="border border-gray-300 p-4">TVM-01.1</td>
					<td class="border border-gray-300 p-4">Do you have anti-malware programs that support or connect to your cloud service offerings installed on all of your IT infrastructure network and systems components?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4"></td>
				</tr>
				<tr>
					<td class="border border-gray-300 p-4"></td>
					<td class="border border-gray-300 p-4">Vulnerability / Patch Management</td>
					<td class="border border-gray-300 p-4">TVM-02.5</td>
					<td class="border border-gray-300 p-4">Do you have a capability to patch vulnerabilities across all of your computing devices, applications, and systems?</td>
					<td class="border border-gray-300 p-4">Yes</td>
					<td class="border border-gray-300 p-4">Our infrastructure is configured to run automatic security updates on all machines. Our deployed containers are monitored for vulnerabilities and patched according to our bug fix policy.</td>
				</tr>
			</tbody>
		</table>
	</div>
</main>
