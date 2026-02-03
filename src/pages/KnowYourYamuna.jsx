import "./KnowYourYamuna.css";

const KnowYourYamuna = () => {
    return (
        <section className="pollution-info">

            {/* TITLE */}
            <h2 className="section-title">Understanding Yamuna Pollution</h2>
            <p className="section-subtitle">
                Let’s understand what is harming the Yamuna River and why urgent action is needed.
            </p>

            {/* ================= CAUSES ================= */}
            <div className="info-block">
                <h3>Major Causes of Yamuna Pollution</h3>

                <div className="cause-grid">
                    <div className="cause-card">
                        <span className="percent">~70%</span>
                        <h4>Domestic Sewage</h4>
                        <p>
                            Untreated wastewater from homes released directly into drains
                            that flow into the Yamuna.
                        </p>
                    </div>

                    <div className="cause-card">
                        <span className="percent">~20%</span>
                        <h4>Industrial Waste</h4>
                        <p>
                            Toxic chemicals and effluents discharged by nearby industries.
                        </p>
                    </div>

                    <div className="cause-card">
                        <span className="percent">~5%</span>
                        <h4>Plastic & Solid Waste</h4>
                        <p>
                            Garbage, polythene, and non-biodegradable waste dumped into the river.
                        </p>
                    </div>

                    <div className="cause-card">
                        <span className="percent">~5%</span>
                        <h4>Agricultural Runoff</h4>
                        <p>
                            Fertilizers and pesticides washed from farms into the river.
                        </p>
                    </div>
                </div>

                <p className="note">
                    These values are indicative and based on multiple environmental reports.
                </p>
            </div>

            {/* ================= POLLUTANTS ================= */}
            <div className="info-block">
                <h3>Common Pollutants Found in Yamuna</h3>

                <div className="pollutant-list">
                    <div className="pollutant-item">🫧 Detergents → White toxic foam</div>
                    <div className="pollutant-item">🧪 Industrial chemicals → Poisoned water</div>
                    <div className="pollutant-item">🦠 Bacteria → Water-borne diseases</div>
                    <div className="pollutant-item">🧴 Plastic waste → Choking of river flow</div>
                    <div className="pollutant-item">🌾 Pesticides → Harm to fish and plants</div>
                </div>
            </div>

            {/* ================= CLEAN RIVER PARAMETERS ================= */}
            <div className="info-block glass-table">
                <h3>Normal Parameters of a Clean River</h3>

                <div className="parameter-row">
                    <span>Dissolved Oxygen (DO)</span>
                    <span>≥ 5 mg/L</span>
                </div>

                <div className="parameter-row">
                    <span>Biochemical Oxygen Demand (BOD)</span>
                    <span>≤ 3 mg/L</span>
                </div>

                <div className="parameter-row">
                    <span>pH Level</span>
                    <span>6.5 – 8.5</span>
                </div>

                <div className="parameter-row">
                    <span>Faecal Coliform</span>
                    <span>Very Low / Nil</span>
                </div>

                <p className="note">
                    Most stretches of the Yamuna in Delhi do not meet these standards.
                </p>
            </div>

            {/* ================= DATA SCOPE ================= */}
            <div className="info-block disclaimer">
                <h3>Data Accuracy & Scope</h3>
                <p>
                    The data shown on this page is indicative and compiled from multiple
                    government and environmental reports. It is presented for educational
                    and awareness purposes and may not represent real-time values.
                </p>
            </div>

            {/* ================= REFERENCES ================= */}
            <div className="info-block references">
                <h3>📌 Data Sources & References</h3>
                <ul>
                    <li>Central Pollution Control Board (CPCB)</li>
                    <li>National Green Tribunal (NGT) Reports</li>
                    <li>Delhi Pollution Control Committee (DPCC)</li>
                    <li>Ministry of Jal Shakti, Government of India</li>
                    <li>Yamuna Action Plan (YAP)</li>
                </ul>
            </div>

        </section>
    );
};

export default KnowYourYamuna;
