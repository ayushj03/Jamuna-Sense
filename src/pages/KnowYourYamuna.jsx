import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import "./KnowYourYamuna.css";

const KnowYourYamuna = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Donut Chart - Pollution Causes
  const getCausesChartOption = () => ({
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}%",
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: {
        fontSize: 13,
        fontFamily: "Georgia, serif",
      },
    },
    series: [
      {
        name: "Pollution Causes",
        type: "pie",
        radius: ["45%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: "#fff",
          borderWidth: 3,
        },
        label: {
          show: true,
          formatter: "{b}\n{c}%",
          fontSize: 12,
          fontWeight: "bold",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: "bold",
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        data: [
          {
            value: 70,
            name: "Domestic Sewage",
            itemStyle: { color: "#EF4444" },
          },
          {
            value: 20,
            name: "Industrial Waste",
            itemStyle: { color: "#F59E0B" },
          },
          {
            value: 5,
            name: "Plastic & Solid Waste",
            itemStyle: { color: "#8B5CF6" },
          },
          {
            value: 5,
            name: "Agricultural Runoff",
            itemStyle: { color: "#22C55E" },
          },
        ],
      },
    ],
  });

  // Pictorial Chart - Pollutants
  const getPollutantsChartOption = () => ({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "value",
      max: 100,
      axisLabel: {
        formatter: "{value}%",
      },
    },
    yAxis: {
      type: "category",
      data: ["Pesticides", "Plastic", "Bacteria", "Chemicals", "Detergents"],
      axisLabel: {
        fontSize: 13,
        fontFamily: "Georgia, serif",
      },
    },
    grid: {
      left: "15%",
      right: "10%",
      top: "5%",
      bottom: "5%",
    },
    series: [
      {
        type: "bar",
        data: [
          { value: 10, itemStyle: { color: "#22C55E" } },
          { value: 15, itemStyle: { color: "#8B5CF6" } },
          { value: 25, itemStyle: { color: "#EF4444" } },
          { value: 30, itemStyle: { color: "#F59E0B" } },
          { value: 35, itemStyle: { color: "#3B82F6" } },
        ],
        barWidth: "50%",
        itemStyle: {
          borderRadius: [0, 6, 6, 0],
        },
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          fontSize: 12,
          fontWeight: "bold",
        },
      },
    ],
  });

  // Water Quality Comparison - Horizontal Bar Chart
  const getWaterQualityChartOption = () => ({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Clean River Standards", "Current Delhi Reality"],
      bottom: 0,
      textStyle: {
        fontSize: 12,
        fontFamily: "Georgia, serif",
      },
    },
    grid: {
      left: "20%",
      right: "10%",
      top: "5%",
      bottom: "15%",
    },
    xAxis: {
      type: "value",
      axisLabel: {
        fontSize: 11,
      },
    },
    yAxis: {
      type: "category",
      data: ["pH Level", "BOD (mg/L)", "DO (mg/L)"],
      axisLabel: {
        fontSize: 13,
        fontFamily: "Georgia, serif",
      },
    },
    series: [
      {
        name: "Clean River Standards",
        type: "bar",
        data: [7.5, 3, 5],
        itemStyle: {
          color: "#10B981",
          borderRadius: [0, 6, 6, 0],
        },
        label: {
          show: true,
          position: "right",
          fontSize: 11,
        },
      },
      {
        name: "Current Delhi Reality",
        type: "bar",
        data: [8.2, 52, 0.8],
        itemStyle: {
          color: "#DC2626",
          borderRadius: [0, 6, 6, 0],
        },
        label: {
          show: true,
          position: "right",
          fontSize: 11,
        },
      },
    ],
  });

  const impactCards = [
    {
      id: 1,
      title: "Home Waste",
      subtitle: "Daily Household Contribution",
      description:
        "Untreated sewage from millions of households flows directly into the Yamuna. Common detergents contain phosphates that create toxic foam. Kitchen waste and bathroom discharge add organic load that depletes oxygen levels.",
      stat: "3,296 MLD",
      statLabel: "Sewage Generated Daily",
      color: "#EF4444",
    },
    {
      id: 2,
      title: "Industrial Effluents",
      subtitle: "Factory Discharge Impact",
      description:
        "Textile dyes, heavy metals like chromium and lead, and chemical waste from industries contaminate the river. Many small-scale industries lack proper treatment facilities, releasing toxic substances that harm aquatic life.",
      stat: "500+",
      statLabel: "Industries Along River",
      color: "#F59E0B",
    },
    {
      id: 3,
      title: "Religious Rituals",
      subtitle: "Cultural Practice Effects",
      description:
        "Non-biodegradable items like plastic flowers, polythene bags, and synthetic garlands are immersed during religious ceremonies. Painted idols contain toxic chemicals that leach into water, while flower waste depletes oxygen.",
      stat: "15 Tons",
      statLabel: "Daily Waste from Rituals",
      color: "#8B5CF6",
    },
  ];

  const didYouKnowFacts = [
    {
      fact: "A 22km stretch in Delhi represents only 2% of the Yamuna's total length but contributes to 80% of the river's total pollution load.",
      source: "CPCB Data 2024",
    },
    {
      fact: "The toxic white foam on Yamuna is caused by high phosphate levels from laundry detergents and surfactants mixing with organic matter.",
      source: "DPCC Research",
    },
    {
      fact: "Dissolved Oxygen levels drop below 1 mg/L in Delhi, while fish need at least 5 mg/L to survive. The river is biologically dead in this stretch.",
      source: "Water Quality Analysis",
    },
    {
      fact: "Only 60% of Delhi's sewage is treated. The remaining 40% (over 1,300 MLD) flows untreated into the Yamuna every single day.",
      source: "DJB Report 2024",
    },
    {
      fact: "The Yamuna provides water to over 57 million people across 5 states, making its pollution a multi-state health and environmental crisis.",
      source: "Central Water Commission",
    },
    {
      fact: "During monsoon, the river's flow increases and temporarily improves water quality, but pollution returns as water levels drop in winter.",
      source: "Seasonal Monitoring Data",
    },
  ];

  const resources = [
    {
      type: "article",
      title: "CPCB Water Quality Monitoring",
      description:
        "Real-time and historical water quality data from Central Pollution Control Board monitoring stations.",
      link: "https://cpcb.nic.in/water-quality-data/",
    },
    {
      type: "article",
      title: "Delhi Pollution Control Committee Reports",
      description:
        "Official reports on Delhi's environmental status and Yamuna pollution levels.",
      link: "https://dpcc.delhigovt.nic.in/",
    },
    {
      type: "video",
      title: "Yamuna River Restoration Project",
      description:
        "Documentary about ongoing efforts to clean and restore the Yamuna River ecosystem.",
      embedId: "placeholder-video-1",
    },
    {
      type: "article",
      title: "National Mission for Clean Ganga",
      description:
        "Learn about India's comprehensive river rejuvenation program and its application to Yamuna.",
      link: "https://nmcg.nic.in/",
    },
    {
      type: "video",
      title: "Science Behind River Pollution",
      description:
        "Educational video explaining BOD, DO, and other water quality parameters in simple terms.",
      embedId: "placeholder-video-2",
    },
    {
      type: "article",
      title: "Yamuna Action Plan Progress",
      description:
        "Track the progress of various sewage treatment plants and intervention projects along the river.",
      link: "https://mowr.gov.in/",
    },
  ];

  return (
    <div className="yamuna-container">
      {/* Hero Section */}
      <header className="yamuna-hero">
        <div className="hero-content">
          <h1 className="hero-title">Know Your Yamuna</h1>
          <p className="hero-subtitle">
            Understanding India's Sacred but Struggling River
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">1,376 km</span>
              <span className="stat-label">Total Length</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">57 Million</span>
              <span className="stat-label">People Dependent</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">22 km</span>
              <span className="stat-label">Delhi's Critical Zone</span>
            </div>
          </div>
        </div>
      </header>

      {/* Critical Warning */}
      <div className="critical-warning">
        <div className="warning-icon">!</div>
        <div className="warning-content">
          <h3 className="warning-title">Ecological Emergency Status</h3>
          <p className="warning-text">
            The Yamuna River in Delhi is classified as biologically dead with
            dissolved oxygen levels near zero. Despite being sacred and
            culturally significant, this 22km stretch receives untreated sewage
            equivalent to the waste of over 20 million people daily, making it
            one of the most polluted river stretches in the world.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="content-section">
        <h2 className="section-title">What's Polluting Our River?</h2>
        <p className="section-intro">
          Understanding the sources of pollution is the first step toward
          finding solutions. The data below represents contributions from
          different sectors based on CPCB and DPCC monitoring.
        </p>

        <div className="chart-grid">
          <div className="chart-card">
            <h3 className="chart-title">Pollution Sources Distribution</h3>
            <p className="chart-description">
              Percentage contribution of different pollution sources to total
              river contamination
            </p>
            <ReactECharts
              option={getCausesChartOption()}
              style={{ height: "400px" }}
            />
          </div>

          <div className="chart-card">
            <h3 className="chart-title">Major Pollutant Types</h3>
            <p className="chart-description">
              Relative concentration of different contaminants found in the
              river water
            </p>
            <ReactECharts
              option={getPollutantsChartOption()}
              style={{ height: "400px" }}
            />
          </div>
        </div>

        <div className="chart-full">
          <div className="chart-card">
            <h3 className="chart-title">Water Quality Comparison</h3>
            <p className="chart-description">
              Standards vs. Reality: Clean river water should have high
              Dissolved Oxygen (DO), low Biochemical Oxygen Demand (BOD), and
              neutral pH. Delhi's Yamuna shows the opposite.
            </p>
            <ReactECharts
              option={getWaterQualityChartOption()}
              style={{ height: "350px" }}
            />
          </div>
        </div>
      </div>

      {/* How We Are Polluting */}
      <div className="content-section impact-section">
        <h2 className="section-title">How We Are Polluting Yamuna</h2>
        <p className="section-intro">
          Every sector of society contributes to the crisis. Here's how our
          daily activities impact the river.
        </p>

        <div className="impact-grid">
          {impactCards.map((card) => (
            <div
              key={card.id}
              className={`impact-card ${activeCard === card.id ? "active" : ""}`}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ "--card-color": card.color }}
            >
              <div className="impact-header">
                <h3 className="impact-title">{card.title}</h3>
                <p className="impact-subtitle">{card.subtitle}</p>
              </div>
              <div className="impact-body">
                <p className="impact-description">{card.description}</p>
              </div>
              <div className="impact-footer">
                <div className="impact-stat">{card.stat}</div>
                <div className="impact-stat-label">{card.statLabel}</div>
              </div>
              <div className="impact-accent"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know Section */}
      <div className="content-section dyk-section">
        <h2 className="section-title">
          Did You Know?{" "}
        </h2>
        <p className="section-intro">
          Fascinating and alarming facts about the Yamuna that every student
          should know.
        </p>

        <div className="dyk-grid">
          {didYouKnowFacts.map((item, index) => (
            <div key={index} className="dyk-card">
              <div className="dyk-number">{index + 1}</div>
              <p className="dyk-fact">{item.fact}</p>
              <div className="dyk-source">{item.source}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="content-section resources-section">
        <h2 className="section-title">Learn More: Articles & Resources</h2>
        <p className="section-intro">
          Explore official data, research reports, and educational content to
          deepen your understanding.
        </p>

        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className={`resource-type type-${resource.type}`}>
                {resource.type === "article" ? "Article" : "Video"}
              </div>
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-description">{resource.description}</p>
              {resource.type === "article" ? (
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Visit Resource →
                </a>
              ) : (
                <div className="video-placeholder">
                  <div className="play-icon">▶</div>
                  <p className="video-note">Video content available</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="cta-section">
        <h2 className="cta-title">Every Action Counts</h2>
        <p className="cta-text">
          Understanding the problem is just the beginning. Use eco-friendly
          detergents, dispose of waste properly, participate in river clean-up
          drives, and spread awareness. The Yamuna can be restored, but it
          requires collective effort from every citizen.
        </p>
        <div className="cta-actions">
          <button className="cta-button primary">
            Download Educational Materials
          </button>
          <button className="cta-button secondary">
            Share This Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowYourYamuna;
