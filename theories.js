// theories.js — 60-Theory Instructional Design Library & Decision Engine

const ID_THEORIES = [
  // BEHAVIOURAL THEORIES
  { id: 1, category: "Behavioural", name: "Classical Conditioning (Pavlov)", idea: "Stimulus-response association", bestFor: "Attitude change, emotional response to content" },
  { id: 2, category: "Behavioural", name: "Operant Conditioning (Skinner)", idea: "Behaviour shaped by reinforcement/punishment", bestFor: "Compliance training, habit formation, gamification" },
  { id: 3, category: "Behavioural", name: "Social Learning Theory (Bandura)", idea: "Learning by observing others", bestFor: "Soft skills, leadership, safety behaviour modelling" },
  { id: 4, category: "Behavioural", name: "Behaviour Modification", idea: "Systematic reinforcement to change behaviour", bestFor: "Performance improvement, onboarding" },
  { id: 5, category: "Behavioural", name: "Programmed Instruction (Skinner)", idea: "Small steps, immediate feedback", bestFor: "Self-paced eLearning, drill and practice" },

  // COGNITIVE THEORIES
  { id: 6, category: "Cognitive", name: "Cognitive Load Theory (Sweller)", idea: "Working memory is limited; reduce extraneous load", bestFor: "Complex technical training, data-heavy content" },
  { id: 7, category: "Cognitive", name: "Schema Theory (Bartlett / Rumelhart)", idea: "New knowledge anchors to existing mental structures", bestFor: "Onboarding, concept mapping, analogies" },
  { id: 8, category: "Cognitive", name: "Information Processing Theory (Atkinson & Shiffrin)", idea: "Sensory → working → long-term memory pipeline", bestFor: "Structuring content sequence, chunking" },
  { id: 9, category: "Cognitive", name: "Dual Coding Theory (Paivio)", idea: "Verbal + visual channels process independently", bestFor: "Infographics, narrated slides, multimedia" },
  { id: 10, category: "Cognitive", name: "Cognitive Theory of Multimedia Learning (Mayer)", idea: "Words + pictures better than words alone", bestFor: "eLearning slide design, video production" },
  { id: 11, category: "Cognitive", name: "Elaboration Theory (Reigeluth)", idea: "Start simple, add complexity in layers", bestFor: "Curriculum sequencing, modular courses" },
  { id: 12, category: "Cognitive", name: "Component Display Theory (Merrill)", idea: "Match instructional strategy to content type", bestFor: "Course architecture, content classification" },
  { id: 13, category: "Cognitive", name: "Subsumption Theory (Ausubel)", idea: "Advance organisers bridge old and new knowledge", bestFor: "Module introductions, pre-assessments" },
  { id: 14, category: "Cognitive", name: "Gestalt Theory", idea: "Learners perceive patterns as wholes", bestFor: "Visual design, layout, grouping of content" },
  { id: 15, category: "Cognitive", name: "Metacognition Theory (Flavell)", idea: "Thinking about one's own thinking", bestFor: "Reflective practice, self-assessment" },

  // CONSTRUCTIVIST THEORIES
  { id: 16, category: "Constructivist", name: "Constructivism (Piaget)", idea: "Learners build knowledge through experience", bestFor: "Scenario-based learning, problem solving" },
  { id: 17, category: "Constructivist", name: "Social Constructivism (Vygotsky)", idea: "Learning is social; Zone of Proximal Development", bestFor: "Collaborative learning, cohort programmes" },
  { id: 18, category: "Constructivist", name: "Discovery Learning (Bruner)", idea: "Learners construct understanding by exploring", bestFor: "Simulations, exploratory eLearning" },
  { id: 19, category: "Constructivist", name: "Experiential Learning (Kolb)", idea: "Concrete experience → reflection → concept → experiment", bestFor: "Leadership development, ILT design" },
  { id: 20, category: "Constructivist", name: "Situated Learning (Lave & Wenger)", idea: "Learning occurs in authentic contexts", bestFor: "On-the-job training, communities of practice" },
  { id: 21, category: "Constructivist", name: "Anchored Instruction (CTGV)", idea: "Learning anchored in realistic problem scenarios", bestFor: "Case studies, video-based scenarios" },
  { id: 22, category: "Constructivist", name: "Cognitive Apprenticeship (Collins et al.)", idea: "Expert models, then scaffolds, then fades support", bestFor: "Coaching, mentoring programmes" },
  { id: 23, category: "Constructivist", name: "Problem-Based Learning (PBL)", idea: "Real problems drive knowledge acquisition", bestFor: "Medical, legal, technical professional training" },
  { id: 24, category: "Constructivist", name: "Project-Based Learning", idea: "Extended real-world projects", bestFor: "Leadership, innovation, applied skills" },
  { id: 25, category: "Constructivist", name: "Case-Based Reasoning", idea: "Prior cases guide solutions to new problems", bestFor: "Compliance, risk, sales training" },

  // HUMANISTIC THEORIES
  { id: 26, category: "Humanistic", name: "Maslow's Hierarchy of Needs", idea: "Motivation follows a needs hierarchy", bestFor: "Learner motivation design, onboarding" },
  { id: 27, category: "Humanistic", name: "Self-Determination Theory (Deci & Ryan)", idea: "Autonomy, competence, relatedness drive motivation", bestFor: "Engagement design, optional learning paths" },
  { id: 28, category: "Humanistic", name: "Andragogy (Knowles)", idea: "Adults learn differently from children", bestFor: "All corporate eLearning — the baseline" },
  { id: 29, category: "Humanistic", name: "Transformative Learning (Mezirow)", idea: "Learning changes frames of reference", bestFor: "DEI, leadership, culture change programmes" },
  { id: 30, category: "Humanistic", name: "Heutagogy (Hase & Kenyon)", idea: "Self-determined learning beyond self-direction", bestFor: "Advanced professionals, expert learners" },

  // CONNECTIVIST & NETWORKED THEORIES
  { id: 31, category: "Connectivist", name: "Connectivism (Siemens)", idea: "Learning is forming connections across networks", bestFor: "LXP design, social learning, AI-assisted learning" },
  { id: 32, category: "Connectivist", name: "Communities of Practice (Wenger)", idea: "Learning happens through participation in communities", bestFor: "Knowledge management, peer learning" },
  { id: 33, category: "Connectivist", name: "Distributed Cognition (Hutchins)", idea: "Cognition spread across people, tools, artefacts", bestFor: "Workflow learning, performance support tools" },
  { id: 34, category: "Connectivist", name: "Actor-Network Theory (Latour)", idea: "Non-human actors (tools, systems) shape learning", bestFor: "Technology-enhanced learning design" },

  // MOTIVATION & ENGAGEMENT MODELS
  { id: 35, category: "Motivation", name: "ARCS Model (Keller)", idea: "Attention, Relevance, Confidence, Satisfaction", bestFor: "Motivation design across any course" },
  { id: 36, category: "Motivation", name: "Expectancy-Value Theory (Eccles)", idea: "Motivation = expectation of success × value of task", bestFor: "Goal-setting, learner buy-in" },
  { id: 37, category: "Motivation", name: "Flow Theory (Csikszentmihalyi)", idea: "Optimal engagement when challenge matches skill", bestFor: "Gamification, adaptive learning" },
  { id: 38, category: "Motivation", name: "Goal-Setting Theory (Locke & Latham)", idea: "Specific, challenging goals improve performance", bestFor: "Performance management, sales training" },
  { id: 39, category: "Motivation", name: "Attribution Theory (Weiner)", idea: "How learners explain success/failure affects motivation", bestFor: "Feedback design, resilience training" },
  { id: 40, category: "Motivation", name: "Self-Efficacy Theory (Bandura)", idea: "Belief in one's ability drives performance", bestFor: "Confidence-building, stretch assignments" },

  // INSTRUCTIONAL DESIGN MODELS & LEARNING SCIENCE
  { id: 41, category: "ID Models & Science", name: "ADDIE", idea: "Analysis→Design→Development→Implementation→Evaluation", bestFor: "Standard ID project process" },
  { id: 42, category: "ID Models & Science", name: "SAM (Allen)", idea: "Successive Approximation — agile, iterative ID", bestFor: "Rapid eLearning development" },
  { id: 43, category: "ID Models & Science", name: "Gagné's Nine Events", idea: "Structured instructional events sequence", bestFor: "Module-level instructional planning" },
  { id: 44, category: "ID Models & Science", name: "Bloom's Taxonomy (Revised)", idea: "Cognitive hierarchy of learning objectives", bestFor: "Objective writing, assessment design" },
  { id: 45, category: "ID Models & Science", name: "Merrill's Principles of Instruction", idea: "Problem-centred, activation, demonstration, application, integration", bestFor: "Course architecture" },
  { id: 46, category: "ID Models & Science", name: "4C/ID Model (van Merriënboer)", idea: "Four Components for complex skill learning", bestFor: "Technical and professional skill training" },
  { id: 47, category: "ID Models & Science", name: "Dick & Carey Model", idea: "Systems approach to instructional design", bestFor: "Large-scale curriculum development" },
  { id: 48, category: "ID Models & Science", name: "Kirkpatrick Model", idea: "Four levels of training evaluation", bestFor: "Measuring training effectiveness" },
  { id: 49, category: "ID Models & Science", name: "Phillips ROI Model", idea: "Adds ROI as a fifth evaluation level", bestFor: "Executive-level training justification" },
  { id: 50, category: "ID Models & Science", name: "Action Mapping (Cathy Moore)", idea: "Business goal → behaviour → practice → content", bestFor: "Performance-focused eLearning" },
  { id: 51, category: "ID Models & Science", name: "Universal Design for Learning (UDL)", idea: "Multiple means of representation, action, engagement", bestFor: "Inclusive learning design" },
  { id: 52, category: "ID Models & Science", name: "Spaced Practice / Spacing Effect (Ebbinghaus)", idea: "Distributed practice beats massed practice", bestFor: "Microlearning, reinforcement campaigns" },
  { id: 53, category: "ID Models & Science", name: "Interleaving", idea: "Mixing topics improves long-term retention", bestFor: "Assessment design, practice sequencing" },
  { id: 54, category: "ID Models & Science", name: "Retrieval Practice (Testing Effect)", idea: "Recalling information strengthens memory", bestFor: "Quiz design, flashcards, knowledge checks" },
  { id: 55, category: "ID Models & Science", name: "Worked Examples Effect", idea: "Studying solved problems before practising", bestFor: "Technical training, onboarding" },
  { id: 56, category: "ID Models & Science", name: "Desirable Difficulties (Bjork)", idea: "Making learning harder improves long-term retention", bestFor: "Adaptive difficulty, varied practice" },
  { id: 57, category: "ID Models & Science", name: "Cognitive Flexibility Theory (Spiro)", idea: "Ill-structured domains need multiple representations", bestFor: "Advanced topic instruction" },
  { id: 58, category: "ID Models & Science", name: "Threshold Concepts (Meyer & Land)", idea: "Some concepts transform understanding irreversibly", bestFor: "Curriculum gateway design" },
  { id: 59, category: "ID Models & Science", name: "Transfer-Appropriate Processing", idea: "Learning context should match performance context", bestFor: "Simulation, on-the-job training design" },
  { id: 60, category: "ID Models & Science", name: "Cognitive Apprenticeship (Collins)", idea: "Model → coach → scaffold → fade", bestFor: "Expert skill transfer, mentoring" }
];

// Quick-Selection Decision Matrix
const GOAL_MATRIX = {
  "performance_action": { label: "Drive a specific on-the-job action (Compliance / Ops)", primary: 50, secondary: 59 },
  "behaviour_change":   { label: "Change a workplace behaviour or habit", primary: 2, secondary: 4 },
  "complex_technical":  { label: "Teach a complex technical or data-heavy skill", primary: 6, secondary: 46 },
  "soft_skills":        { label: "Build soft skills or leadership through modelling", primary: 3, secondary: 40 },
  "scenario_based":     { label: "Create authentic scenario-based problem solving", primary: 20, secondary: 23 },
  "motivate_learners":  { label: "Motivate disengaged learners", primary: 35, secondary: 27 },
  "adult_professionals":{ label: "General corporate training for adult professionals", primary: 28, secondary: 45 },
  "long_term_retention":{ label: "Design for long-term memory retention", primary: 52, secondary: 54 },
  "culture_mindset":    { label: "Drive culture, DEI, or mindset change", primary: 29, secondary: 39 },
  "ai_networked":       { label: "Teach in an AI or networked workflow context", primary: 31, secondary: 33 },
  "inclusive_design":   { label: "Design inclusive, multi-modal learning", primary: 51, secondary: 28 },
  "expert_learners":    { label: "Upskill advanced / expert practitioners", primary: 30, secondary: 57 }
};

function getTheoryById(id) {
  return ID_THEORIES.find(t => t.id === Number(id)) || ID_THEORIES[49]; // Default: Action Mapping (#50)
}