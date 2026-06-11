export const services = [
  {
    id: 1,
    name: "Web Penetration Testing",
    shortName: "Web Pen Testing",
    description:
      "Comprehensive security assessment of web applications to identify vulnerabilities and security flaws",
    longDescription: `Our web penetration testing service covers:
      • OWASP Top 10 vulnerability assessment
      • SQL Injection and XSS testing
      • Authentication and authorization bypass testing
      • API security assessment
      • Session management vulnerabilities
      • Business logic flaws identification
      • Detailed vulnerability reports with remediation guides`,
    icon: "🌐",
    price: "Starting from PKR 50,000",
    timeline: "2-4 weeks",
    features: [
      "Full source code review",
      "Manual and automated testing",
      "Real-world attack simulations",
      "Detailed report with proof of concepts",
    ],
  },
  {
    id: 2,
    name: "Mobile App Security Testing",
    shortName: "Mobile App Security",
    description: "Security assessment for iOS and Android applications",
    longDescription: `Mobile security testing includes:
      • Binary analysis and reverse engineering
      • Insecure data storage detection
      • Weak encryption identification
      • API communication vulnerabilities
      • Authentication bypass testing
      • Network security assessment
      • Data leakage prevention`,
    icon: "📱",
    price: "Starting from PKR 75,000",
    timeline: "3-5 weeks",
    features: [
      "iOS & Android support",
      "Network traffic analysis",
      "Local storage security review",
      "Third-party SDK assessment",
    ],
  },
  {
    id: 3,
    name: "SOC as a Service",
    shortName: "SOC Setup",
    description: "Security Operations Center setup and management for 24/7 monitoring",
    longDescription: `SOC as a Service provides:
      • 24/7 security monitoring and incident response
      • SIEM (Security Information and Event Management) setup
      • Log aggregation and analysis
      • Threat detection and alerting
      • Incident response team
      • Security metrics and dashboards
      • Compliance reporting`,
    icon: "🛡️",
    price: "Starting from PKR 150,000/month",
    timeline: "Ongoing",
    features: [
      "24/7 monitoring",
      "Real-time alerts",
      "Incident response",
      "Monthly reports",
    ],
  },
  {
    id: 4,
    name: "Vulnerability Assessment",
    shortName: "Vulnerability Assessment",
    description: "Systematic identification and analysis of security weaknesses",
    longDescription: `Vulnerability assessment covers:
      • Network vulnerability scanning
      • System configuration review
      • Patch management assessment
      • Weak password policies
      • Unauthorized access points
      • Malware and backdoor detection
      • Risk scoring and prioritization`,
    icon: "🔍",
    price: "Starting from PKR 40,000",
    timeline: "1-2 weeks",
    features: [
      "Automated scanning",
      "Manual verification",
      "Risk classification",
      "Remediation roadmap",
    ],
  },
  {
    id: 5,
    name: "Security Audit Reports",
    shortName: "Security Audit",
    description: "Comprehensive security audit and compliance assessment",
    longDescription: `Security audit includes:
      • Infrastructure security review
      • Access control assessment
      • Data protection measures evaluation
      • Incident response plan review
      • Security policy evaluation
      • Compliance checks (ISO 27001, PCI-DSS, GDPR)
      • Executive summary and recommendations`,
    icon: "📋",
    price: "Starting from PKR 60,000",
    timeline: "2-3 weeks",
    features: [
      "Full scope assessment",
      "Compliance verification",
      "Risk management plan",
      "Implementation roadmap",
    ],
  },
  {
    id: 6,
    name: "Incident Response",
    shortName: "Incident Response",
    description: "Emergency response to security breaches and cyber attacks",
    longDescription: `Incident response services include:
      • 24/7 emergency hotline
      • Immediate containment measures
      • Forensic investigation
      • Root cause analysis
      • Evidence preservation
      • Recovery and remediation
      • Post-incident analysis and lessons learned`,
    icon: "🚨",
    price: "On-demand",
    timeline: "Immediate response",
    features: [
      "24/7 response team",
      "Rapid containment",
      "Forensic analysis",
      "Legal support",
    ],
  },
];

export const serviceCategories = [
  "All",
  "Testing",
  "Monitoring",
  "Assessment",
  "Response",
];
