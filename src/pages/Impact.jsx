import React, { useState, useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";
import "./Impact.css";

const Impact = () => {
  const [viewMode, setViewMode] = useState("report"); // 'report' or 'response'
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Budget Allocation Treemap
  const getBudgetTreemapOption = () => ({
    tooltip: {
      formatter: function (info) {
        return `<strong>${info.name}</strong><br/>₹${info.value} Crore<br/>${info.data.description || ""}`;
      },
    },
    series: [
      {
        name: "Budget Allocation",
        type: "treemap",
        width: "100%",
        height: "100%",
        roam: false,
        nodeClick: false,
        breadcrumb: {
          show: false,
        },
        label: {
          show: true,
          formatter: function (params) {
            return `{name|${params.name}}\n{value|₹${params.value}Cr}`;
          },
          rich: {
            name: {
              fontSize: 14,
              fontWeight: "bold",
              color: "#fff",
              lineHeight: 20,
            },
            value: {
              fontSize: 18,
              fontWeight: "700",
              color: "#fff",
              lineHeight: 24,
            },
          },
        },
        upperLabel: {
          show: true,
          height: 30,
          color: "#fff",
          fontSize: 14,
          fontWeight: "bold",
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 3,
          gapWidth: 3,
        },
        levels: [
          {
            itemStyle: {
              borderWidth: 0,
              gapWidth: 5,
            },
          },
          {
            itemStyle: {
              gapWidth: 2,
            },
          },
        ],
        data: [
          {
            name: "Delhi Water & Sanitation (2025)",
            value: 9000,
            itemStyle: { color: "#0f172a" },
            children: [
              {
                name: "Yamuna Cleanup",
                value: 500,
                description: "Direct river cleaning operations",
                itemStyle: { color: "#dc2626" },
              },
              {
                name: "STP Repairs",
                value: 500,
                description: "Existing treatment plant maintenance",
                itemStyle: { color: "#f59e0b" },
              },
              {
                name: "New Sewer Lines",
                value: 250,
                description: "Infrastructure expansion",
                itemStyle: { color: "#8b5cf6" },
              },
              {
                name: "Other Sanitation",
                value: 7750,
                description: "General water & sewage projects",
                itemStyle: { color: "#3b82f6" },
              },
            ],
          },
        ],
      },
    ],
  });

  // Funding Timeline Chart
  const getFundingTimelineOption = () => ({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Funds Allocated", "Pollution Level (%)"],
      textStyle: {
        color: "#1e293b",
        fontSize: 12,
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["1993", "2000", "2010", "2015", "2020", "2025"],
      axisLabel: {
        color: "#475569",
        fontSize: 12,
      },
      axisLine: {
        lineStyle: {
          color: "#cbd5e1",
        },
      },
    },
    yAxis: [
      {
        type: "value",
        name: "Crores (₹)",
        position: "left",
        axisLabel: {
          formatter: "₹{value}",
          color: "#475569",
          fontSize: 11,
        },
        axisLine: {
          lineStyle: {
            color: "#cbd5e1",
          },
        },
        splitLine: {
          lineStyle: {
            color: "#f1f5f9",
          },
        },
      },
      {
        type: "value",
        name: "Pollution %",
        position: "right",
        max: 100,
        axisLabel: {
          formatter: "{value}%",
          color: "#475569",
          fontSize: 11,
        },
        axisLine: {
          lineStyle: {
            color: "#cbd5e1",
          },
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "Funds Allocated",
        type: "bar",
        data: [200, 500, 1500, 3000, 5500, 8000],
        itemStyle: {
          color: "#3b82f6",
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
          position: "top",
          formatter: "₹{c}",
          fontSize: 10,
        },
      },
      {
        name: "Pollution Level (%)",
        type: "line",
        yAxisIndex: 1,
        data: [75, 76, 78, 77, 79, 78],
        itemStyle: {
          color: "#dc2626",
        },
        lineStyle: {
          width: 3,
        },
        symbol: "circle",
        symbolSize: 8,
        label: {
          show: true,
          position: "top",
          formatter: "{c}%",
          fontSize: 10,
          color: "#dc2626",
        },
      },
    ],
  });

  // Stakeholders data
  const stakeholders = {
    ngos: [
      {
        name: "Yamuna Jiye Abhiyan",
        focus: "Advocacy & Legal Action",
        description:
          "Led by environmental activist Manoj Mishra, this NGO has filed multiple PILs in the National Green Tribunal (NGT) demanding stricter enforcement of pollution norms and accountability from government agencies.",
        impact: "50+ Court Cases",
        year: "Since 1994",
      },
      {
        name: "ESDA",
        focus: "Ground-Level Cleaning",
        description:
          "Eco-Social Development Agency works directly at Yamuna ghats, installing dustbins, organizing community clean-up drives, and creating awareness among locals about waste disposal practices.",
        impact: "15 Ghats Maintained",
        year: "Active",
      },
    ],
    corporate: [
      {
        name: "CSR Corpus Fund 2025",
        focus: "Adopt a Drain Initiative",
        description:
          'Companies like BSES Yamuna Power, Tata Power Delhi, and other corporates are being urged to "adopt" specific drains entering the Yamuna and install small decentralized Sewage Treatment Plants (STPs) to treat wastewater before it reaches the river.',
        impact: "12 Drains Targeted",
        participants: ["BSES Yamuna", "Tata Power", "ITC Ltd", "Maruti Suzuki"],
      },
      {
        name: "Industrial Effluent Management",
        focus: "Pre-Treatment Facilities",
        description:
          "DPCC mandates industries in clusters like Wazirpur, Naraina, and Okhla to install Effluent Treatment Plants (ETPs) before discharging into municipal sewers.",
        impact: "200+ ETPs Installed",
        participants: ["Textile Units", "Chemical Plants", "Dye Industries"],
      },
    ],
    recyclers: [
      {
        name: "E-Waste Recyclers Initiative",
        focus: "DPCC 2025 Drive",
        description:
          "Focused on industrial clusters like Mustafabad and Seelampur, this initiative ensures proper recycling of electronic waste to prevent toxic metals from entering the river through groundwater contamination.",
        impact: "500 Tons/Month",
        zones: ["Mustafabad", "Seelampur", "Bawana"],
      },
      {
        name: "Plastic Waste Interceptors",
        focus: "Drain-Level Filtration",
        description:
          "Physical barriers and mesh screens installed at major drain outlets (Najafgarh, Shahdara, Barapullah) to catch floating plastic waste before it enters the Yamuna. Collected plastic is sent to authorized recyclers.",
        impact: "20 Tons/Day Plastic",
        locations: ["Najafgarh Drain", "Shahdara Drain", "Barapullah Drain"],
      },
    ],
  };

  // Government initiatives
  const govInitiatives = [
    {
      name: "YAP-III (Yamuna Action Plan Phase III)",
      funding: "Japan International Cooperation Agency (JICA)",
      budget: "₹1,656 Crore",
      scope:
        "Construction of new STPs, rehabilitation of existing plants, and laying of trunk sewers in unauthorized colonies",
      status: "Ongoing",
      completion: "2026 Target",
    },
    {
      name: "Namami Gange Program",
      funding: "Central Government",
      budget: "₹20,000 Crore (National)",
      scope:
        "Created 1,268 MLD sewage treatment capacity across Yamuna basin states. Focus on bio-remediation and riverfront development.",
      status: "Active",
      completion: "Multi-phase",
    },
    {
      name: "Coronation Pillar STP Upgrade",
      funding: "Delhi Jal Board",
      budget: "₹518 Crore",
      scope:
        "Upgrading the 90 MLD Coronation Pillar STP to 135 MLD capacity using advanced Sequential Batch Reactor (SBR) technology for better treatment efficiency.",
      status: "Under Construction",
      completion: "2025-26",
    },
  ];

  return (
    <div className="impact-container">
      {/* Header */}
      <div className="impact-header fade-in">
        <div className="header-content">
          <h1 className="impact-title">The Reality Gap</h1>
          <p className="impact-subtitle">
            Three Decades of Funding vs. Actual Water Quality Improvement
          </p>
        </div>
      </div>

      {/* Report vs Response Split View */}
      <section className="split-section animate-on-scroll" id="split-section">
        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === "report" ? "active" : ""}`}
            onClick={() => setViewMode("report")}
          >
            The Report (Goals)
          </button>
          <button
            className={`toggle-btn ${viewMode === "response" ? "active" : ""}`}
            onClick={() => setViewMode("response")}
          >
            The Response (Reality)
          </button>
        </div>

        <div className="split-content-wrapper">
          {viewMode === "report" ? (
            <div className="split-content report-view fade-in-slide">
              <div className="split-card goal-card">
                <h2 className="split-title">
                  Maili Se Nirmal Yamuna Action Plan
                </h2>
                <div className="goal-metrics">
                  <div className="metric-item">
                    <div className="metric-label">Target Dissolved Oxygen</div>
                    <div className="metric-value success">&ge; 5 mg/L</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">Target BOD</div>
                    <div className="metric-value success">&le; 3 mg/L</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">
                      Sewage Treatment Capacity
                    </div>
                    <div className="metric-value success">100%</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">
                      Total Investment (Since 1993)
                    </div>
                    <div className="metric-value highlight">₹8,000+ Crore</div>
                  </div>
                </div>
                <p className="goal-description">
                  The comprehensive action plan envisions a clean, flowing
                  Yamuna with water quality suitable for bathing and supporting
                  aquatic life. Multiple phases of investment have focused on
                  building sewage treatment infrastructure and intercepting
                  drains.
                </p>
              </div>
            </div>
          ) : (
            <div className="split-content response-view fade-in-slide">
              <div className="split-card reality-card">
                <h2 className="split-title">
                  Ground Reality in Delhi's 22km Stretch
                </h2>
                <div className="reality-metrics">
                  <div className="metric-item">
                    <div className="metric-label">Actual Dissolved Oxygen</div>
                    <div className="metric-value danger">&lt; 1 mg/L</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">Actual BOD</div>
                    <div className="metric-value danger">&gt; 50 mg/L</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">Pollution Contribution</div>
                    <div className="metric-value danger">76-80%</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">Untreated Sewage Daily</div>
                    <div className="metric-value danger">1,300 MLD</div>
                  </div>
                </div>
                <p className="reality-description">
                  Despite massive investment, Delhi's 22km stretch (only 2% of
                  river length) contributes 76-80% of total Yamuna pollution.
                  The primary challenge: 40% of Delhi's sewage flows untreated
                  due to infrastructure gaps in unauthorized colonies and
                  overloaded treatment plants.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Timeline Chart */}
      <section className="chart-section animate-on-scroll" id="chart-section">
        <h2 className="section-title">The Investment-Impact Disconnect</h2>
        <p className="section-description">
          Cumulative funding has grown exponentially, yet pollution levels
          remain stubbornly high. This chart reveals the gap between financial
          commitment and environmental outcomes.
        </p>
        <div className="chart-wrapper">
          <ReactECharts
            option={getFundingTimelineOption()}
            style={{ height: "400px" }}
          />
        </div>
      </section>

      {/* Budget Allocation */}
      <section className="budget-section animate-on-scroll" id="budget-section">
        <h2 className="section-title">
          Delhi Budget 2025-26: Water & Sanitation Breakdown
        </h2>
        <p className="section-description">
          How the ₹9,000 crore water and sanitation budget is allocated across
          different interventions.
        </p>
        <div className="budget-chart-wrapper">
          <ReactECharts
            option={getBudgetTreemapOption()}
            style={{ height: "450px" }}
          />
        </div>
        <div className="budget-note">
          Note: While ₹500 crore is specifically allocated for Yamuna cleanup
          and another ₹500 crore for STP repairs, the challenge lies in timely
          execution and addressing sewage from rapidly growing unauthorized
          settlements.
        </div>
      </section>

      {/* Government Initiatives */}
      <section
        className="initiatives-section animate-on-scroll"
        id="initiatives-section"
      >
        <h2 className="section-title">Major Government Projects & Funding</h2>
        <div className="initiatives-grid">
          {govInitiatives.map((initiative, index) => (
            <div
              key={index}
              className="initiative-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="initiative-badge">{initiative.status}</div>
              <h3 className="initiative-name">{initiative.name}</h3>
              <div className="initiative-funding">
                <span className="funding-label">Funded by:</span>
                <span className="funding-source">{initiative.funding}</span>
              </div>
              <div className="initiative-budget">{initiative.budget}</div>
              <p className="initiative-scope">{initiative.scope}</p>
              <div className="initiative-timeline">
                Target: {initiative.completion}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stakeholders Grid */}
      <section
        className="stakeholders-section animate-on-scroll"
        id="stakeholders-section"
      >
        <h2 className="section-title">The Stakeholder Ecosystem</h2>
        <p className="section-description">
          Beyond government efforts, NGOs, corporations, and recyclers play
          crucial roles in the restoration effort.
        </p>

        {/* NGOs */}
        <div className="stakeholder-category">
          <h3 className="category-title">NGO Activism & Community Work</h3>
          <div className="stakeholder-grid">
            {stakeholders.ngos.map((ngo, index) => (
              <div
                key={index}
                className="stakeholder-card ngo-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stakeholder-header">
                  <h4 className="stakeholder-name">{ngo.name}</h4>
                  <span className="stakeholder-tag">{ngo.focus}</span>
                </div>
                <p className="stakeholder-description">{ngo.description}</p>
                <div className="stakeholder-footer">
                  <div className="impact-badge">{ngo.impact}</div>
                  <div className="year-badge">{ngo.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate CSR */}
        <div className="stakeholder-category">
          <h3 className="category-title">Corporate Social Responsibility</h3>
          <div className="stakeholder-grid">
            {stakeholders.corporate.map((corp, index) => (
              <div
                key={index}
                className="stakeholder-card corporate-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stakeholder-header">
                  <h4 className="stakeholder-name">{corp.name}</h4>
                  <span className="stakeholder-tag">{corp.focus}</span>
                </div>
                <p className="stakeholder-description">{corp.description}</p>
                <div className="participants-list">
                  <strong>Key Participants:</strong>
                  <div className="participant-tags">
                    {corp.participants.map((participant, idx) => (
                      <span key={idx} className="participant-tag">
                        {participant}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="stakeholder-footer">
                  <div className="impact-badge">{corp.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recyclers */}
        <div className="stakeholder-category">
          <h3 className="category-title">Waste Management & Recycling</h3>
          <div className="stakeholder-grid">
            {stakeholders.recyclers.map((recycler, index) => (
              <div
                key={index}
                className="stakeholder-card recycler-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stakeholder-header">
                  <h4 className="stakeholder-name">{recycler.name}</h4>
                  <span className="stakeholder-tag">{recycler.focus}</span>
                </div>
                <p className="stakeholder-description">
                  {recycler.description}
                </p>
                <div className="locations-list">
                  <strong>
                    {recycler.zones ? "Focus Zones:" : "Key Locations:"}
                  </strong>
                  <div className="location-tags">
                    {(recycler.zones || recycler.locations).map(
                      (location, idx) => (
                        <span key={idx} className="location-tag">
                          {location}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="stakeholder-footer">
                  <div className="impact-badge">{recycler.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section
        className="insights-section animate-on-scroll"
        id="insights-section"
      >
        <h2 className="section-title">
          Critical Insights: Why the Gap Persists
        </h2>
        <div className="insights-grid">
          <div className="insight-card" style={{ animationDelay: "0s" }}>
            <div className="insight-number">01</div>
            <h3 className="insight-title">Infrastructure vs. Urban Growth</h3>
            <p className="insight-text">
              Delhi's population has grown from 9.4 million (1991) to over 30
              million (2024), but sewage infrastructure hasn't kept pace.
              Unauthorized colonies house 40% of the population but lack formal
              sewerage connections.
            </p>
          </div>
          <div className="insight-card" style={{ animationDelay: "0.1s" }}>
            <div className="insight-number">02</div>
            <h3 className="insight-title">Treatment Plant Inefficiencies</h3>
            <p className="insight-text">
              Many existing STPs operate at 60-70% efficiency due to poor
              maintenance, irregular power supply, and lack of skilled
              operators. Even treated water often exceeds discharge norms for
              BOD and COD.
            </p>
          </div>
          <div className="insight-card" style={{ animationDelay: "0.2s" }}>
            <div className="insight-number">03</div>
            <h3 className="insight-title">Monsoon Dependency</h3>
            <p className="insight-text">
              River shows temporary improvement during monsoon when flow
              increases from upstream states. In dry months (Nov-May), the Delhi
              stretch becomes a drain with minimal dilution capacity.
            </p>
          </div>
          <div className="insight-card" style={{ animationDelay: "0.3s" }}>
            <div className="insight-number">04</div>
            <h3 className="insight-title">
              Multi-State Coordination Challenge
            </h3>
            <p className="insight-text">
              Yamuna flows through multiple states. Delhi alone cannot restore
              the river without coordinated action from Haryana, UP, and proper
              flow maintenance from Haryana's dams during lean seasons.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
