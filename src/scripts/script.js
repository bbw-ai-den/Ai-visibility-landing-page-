/* ============================================================
   BIG BRAIN WAY
   INSTAGRAM DIGITAL MATURITY CHECKLIST
   PRODUCTION JAVASCRIPT
   ============================================================ */


/* ============================================================
   01. GOOGLE APPS SCRIPT
   ============================================================ */

const INSTAGRAM_GOOGLE_APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwJWpAAnL9hlrwCcVrmJgZBS-4aFkB0xu5k-QY0qhSf1QNSGtAcBGUu5tNyl2T-r545Dg/exec";


/* ============================================================
   02. INITIALIZATION
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    initScrollReveal();

    initCardGlow();

    initMaturityExperience();

    initProblemExperience();

    initStageJourney();

    initMagneticButtons();

    initBackToTop();

    initForm();

    initSmoothAnchors();

});


/* ============================================================
   03. SCROLL REVEAL
   ============================================================ */

function initScrollReveal() {

    const elements =
        document.querySelectorAll(".reveal");

    if (!elements.length) {
        return;
    }


    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        elements.forEach((element) => {
            element.classList.add("revealed");
        });

        return;
    }


    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "revealed"
                    );

                    observerInstance.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    elements.forEach((element) => {
        observer.observe(element);
    });

}


/* ============================================================
   04. CARD GLOW
   ============================================================ */

function initCardGlow() {

    const cards =
        document.querySelectorAll(
            ".interactive-card, .journey-card, .problem-tab, .value-card"
        );

    if (!cards.length) {
        return;
    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {
        return;
    }


    cards.forEach((card) => {

        card.addEventListener(
            "pointermove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    ((event.clientX - rect.left) /
                        rect.width) *
                    100;

                const y =
                    ((event.clientY - rect.top) /
                        rect.height) *
                    100;


                card.style.setProperty(
                    "--mouse-x",
                    `${x}%`
                );

                card.style.setProperty(
                    "--mouse-y",
                    `${y}%`
                );

            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                card.style.setProperty(
                    "--mouse-x",
                    "50%"
                );

                card.style.setProperty(
                    "--mouse-y",
                    "15%"
                );

            }
        );

    });

}


/* ============================================================
   05. MATURITY EXPERIENCE
   ============================================================ */

function initMaturityExperience() {

    const stageRows =
        document.querySelectorAll(
            ".maturity-row"
        );

    if (!stageRows.length) {
        return;
    }


    const stageData = {

        1: {
            label: "MANUAL",

            title:
                "People are the system.",

            description:
                "Repetitive work depends on people, spreadsheets and manual handoffs.",

            signal:
                "Someone has to do this manually every time.",

            next:
                "Identify repetitive work worth digitizing."
        },


        2: {
            label: "DIGITIZED",

            title:
                "The tools exist — but they are isolated.",

            description:
                "Your business uses digital tools, but information still lives in separate systems and requires manual handoffs.",

            signal:
                "Information still gets moved between systems.",

            next:
                "Connect the systems that share data."
        },


        3: {
            label: "CONNECTED",

            title:
                "Your systems can finally communicate.",

            description:
                "Information moves between the right tools, reducing duplicate work and making operations easier to understand.",

            signal:
                "Information flows instead of being copied.",

            next:
                "Automate predictable processes."
        },


        4: {
            label: "AUTOMATED",

            title:
                "Workflows do more of the work.",

            description:
                "Repeatable processes run automatically, freeing your team to focus on decisions, customers, and growth.",

            signal:
                "Predictable work no longer needs constant human input.",

            next:
                "Introduce intelligence where it matters."
        },


        5: {
            label: "AI-ENABLED",

            title:
                "Intelligence works at scale.",

            description:
                "Connected systems and automation provide the foundation for AI-assisted decisions, workflows, and growth.",

            signal:
                "Systems can help people decide and act faster.",

            next:
                "Continuously optimize and scale."
        }

    };


    const progress =
        document.querySelector(
            "[data-progress-fill]"
        );


    const status =
        document.querySelector(
            "[data-stage-status]"
        );


    const detailNumber =
        document.querySelector(
            "[data-detail-number]"
        );


    const detailLabel =
        document.querySelector(
            "[data-detail-label]"
        );


    const detailTitle =
        document.querySelector(
            "[data-detail-title]"
        );


    const detailDescription =
        document.querySelector(
            "[data-detail-description]"
        );


    const detailSignal =
        document.querySelector(
            "[data-detail-signal]"
        );


    const detailNext =
        document.querySelector(
            "[data-detail-next]"
        );


    const selectedStageInput =
        document.querySelector(
            "#selectedStage"
        );


    function selectStage(stageNumber) {

        const stage =
            stageData[stageNumber];

        if (!stage) {
            return;
        }


        stageRows.forEach((row) => {

            const rowStage =
                Number(row.dataset.stage);

            const isActive =
                rowStage === stageNumber;


            row.classList.toggle(
                "active",
                isActive
            );


            row.setAttribute(
                "aria-pressed",
                isActive
                    ? "true"
                    : "false"
            );


            const state =
                row.querySelector(
                    "[data-stage-state]"
                );


            if (state) {

                state.textContent =
                    isActive
                        ? "SELECTED"
                        : "";

            }

        });


        /* Progress */

        if (progress) {

            progress.style.width =
                `${stageNumber * 20}%`;

        }


        /* Top status */

        if (status) {

            status.textContent =
                stage.label;

        }


        /* Detail */

        if (detailNumber) {

            detailNumber.textContent =
                String(stageNumber)
                    .padStart(2, "0");

        }


        if (detailLabel) {

            detailLabel.textContent =
                stage.label;

        }


        if (detailTitle) {

            detailTitle.textContent =
                stage.title;

        }


        if (detailDescription) {

            detailDescription.textContent =
                stage.description;

        }


        if (detailSignal) {

            detailSignal.textContent =
                `"${stage.signal}"`;

        }


        if (detailNext) {

            detailNext.textContent =
                stage.next;

        }


        /* Hidden form field */

        if (selectedStageInput) {

            selectedStageInput.value =
                String(stageNumber);

        }


        /* Remember selected stage */

        try {

            sessionStorage.setItem(
                "bbw-selected-stage",
                String(stageNumber)
            );

        } catch (error) {

            /* Session storage may be unavailable. */

        }

    }


    /* Stage click */

    stageRows.forEach((row) => {

        row.addEventListener(
            "click",
            () => {

                const stageNumber =
                    Number(row.dataset.stage);

                if (
                    Number.isFinite(
                        stageNumber
                    )
                ) {

                    selectStage(
                        stageNumber
                    );

                }

            }
        );

    });


    /* Restore previous stage */

    let initialStage = 1;


    try {

        const storedStage =
            Number(
                sessionStorage.getItem(
                    "bbw-selected-stage"
                )
            );


        if (
            storedStage >= 1 &&
            storedStage <= 5
        ) {

            initialStage =
                storedStage;

        }

    } catch (error) {

        initialStage = 1;

    }


    selectStage(initialStage);


    /* Make stage selector available to form reset */

    window.selectStage =
        selectStage;

}


/* ============================================================
   06. PROBLEM EXPERIENCE
   ============================================================ */

function initProblemExperience() {

    const tabs =
        document.querySelectorAll(
            ".problem-tab"
        );

    if (!tabs.length) {
        return;
    }


    const problemData = {

        manual: {

            number: "01",

            title:
                "Too Much Manual Work",

            description:
                "Repetitive tasks consume time that should go to customers and growth.",

            outcome:
                "Time gets trapped inside repetitive work.",

            visual:
                [
                    "TASK",
                    "PERSON",
                    "REPEAT"
                ]

        },


        systems: {

            number: "02",

            title:
                "Disconnected Systems",

            description:
                "Information lives in different tools, creating duplicate work and missed context.",

            outcome:
                "People become the bridge between systems.",

            visual:
                [
                    "TOOL",
                    "ACTION",
                    "TOOL"
                ]

        },


        decisions: {

            number: "03",

            title:
                "Slow Decisions",

            description:
                "Teams wait for updates, reports, and manual checks before they can act.",

            outcome:
                "Important decisions arrive later than they should.",

            visual:
                [
                    "DATA",
                    "WAIT",
                    "DECIDE"
                ]

        }

    };


    const number =
        document.querySelector(
            "[data-problem-number]"
        );


    const title =
        document.querySelector(
            "[data-problem-title]"
        );


    const description =
        document.querySelector(
            "[data-problem-description]"
        );


    const outcome =
        document.querySelector(
            "[data-problem-outcome]"
        );


    const visual =
        document.querySelector(
            "[data-problem-visual]"
        );


    function selectProblem(problemKey) {

        const problem =
            problemData[problemKey];

        if (!problem) {
            return;
        }


        /* Update tabs */

        tabs.forEach((tab) => {

            const isActive =
                tab.dataset.problem ===
                problemKey;


            tab.classList.toggle(
                "active",
                isActive
            );


            tab.setAttribute(
                "aria-pressed",
                isActive
                    ? "true"
                    : "false"
            );

        });


        /* Update story */

        if (number) {

            number.textContent =
                problem.number;

        }


        if (title) {

            title.textContent =
                problem.title;

        }


        if (description) {

            description.textContent =
                problem.description;

        }


        if (outcome) {

            outcome.textContent =
                problem.outcome;

        }


        /* Update visual */

        if (visual) {

            const nodes =
                visual.querySelectorAll(
                    ".flow-node"
                );


            problem.visual.forEach(
                (text, index) => {

                    const node =
                        nodes[index];

                    if (!node) {
                        return;
                    }


                    node.textContent =
                        text;


                    node.classList.toggle(
                        "warning-node",
                        index ===
                            problem.visual.length - 1
                    );

                }
            );

        }

    }


    tabs.forEach((tab) => {

        tab.addEventListener(
            "click",
            () => {

                const problemKey =
                    tab.dataset.problem;

                selectProblem(
                    problemKey
                );

            }
        );

    });


    const activeTab =
        document.querySelector(
            ".problem-tab.active"
        );


    selectProblem(
        activeTab?.dataset.problem ||
        "manual"
    );

}


/* ============================================================
   07. STAGE JOURNEY
   ============================================================ */

function initStageJourney() {

    const cards =
        document.querySelectorAll(
            ".journey-card"
        );

    if (!cards.length) {
        return;
    }


    const journeyData = {

        1: {

            number: "01",

            title:
                "People are still holding the system together.",

            description:
                "Start by identifying repetitive work and manual handoffs."

        },


        2: {

            number: "02",

            title:
                "Your tools exist, but they work separately.",

            description:
                "Connect the systems that share information."

        },


        3: {

            number: "03",

            title:
                "Your systems can finally work together.",

            description:
                "Automate predictable handoffs between connected systems."

        },


        4: {

            number: "04",

            title:
                "Workflows can now run with less effort.",

            description:
                "Use automation to remove repetitive operational work."

        },


        5: {

            number: "05",

            title:
                "Intelligence can work across the operation.",

            description:
                "Build on connected and automated systems with AI."

        }

    };


    const detailNumber =
        document.querySelector(
            "[data-journey-number]"
        );


    const detailTitle =
        document.querySelector(
            "[data-journey-title]"
        );


    const detailDescription =
        document.querySelector(
            "[data-journey-description]"
        );


    function selectJourney(stageNumber) {

        const stage =
            journeyData[stageNumber];

        if (!stage) {
            return;
        }


        /* Active card */

        cards.forEach((card) => {

            const cardStage =
                Number(
                    card.dataset.journeyStage
                );


            const isActive =
                cardStage === stageNumber;


            card.classList.toggle(
                "active",
                isActive
            );


            card.setAttribute(
                "aria-pressed",
                isActive
                    ? "true"
                    : "false"
            );

        });


        /* Detail */

        if (detailNumber) {

            detailNumber.textContent =
                stage.number;

        }


        if (detailTitle) {

            detailTitle.textContent =
                stage.title;

        }


        if (detailDescription) {

            detailDescription.textContent =
                stage.description;

        }

    }


    cards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                const stageNumber =
                    Number(
                        card.dataset.journeyStage
                    );


                if (
                    Number.isFinite(
                        stageNumber
                    )
                ) {

                    selectJourney(
                        stageNumber
                    );

                }

            }
        );

    });


    const activeCard =
        document.querySelector(
            ".journey-card.active"
        );


    const initialStage =
        Number(
            activeCard?.dataset.journeyStage
        ) || 1;


    selectJourney(
        initialStage
    );

}


/* ============================================================
   08. MAGNETIC BUTTONS
   ============================================================ */

function initMagneticButtons() {

    const buttons =
        document.querySelectorAll(
            ".magnetic"
        );

    if (!buttons.length) {
        return;
    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {
        return;
    }


    const isTouchDevice =
        window.matchMedia(
            "(hover: none)"
        ).matches;


    if (isTouchDevice) {
        return;
    }


    buttons.forEach((button) => {

        button.addEventListener(
            "pointermove",
            (event) => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                const strength =
                    0.12;


                button.style.transform =
                    `translate(${x * strength}px, ${y * strength}px)`;

            }
        );


        button.addEventListener(
            "pointerleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });

}


/* ============================================================
   09. BACK TO TOP
   ============================================================ */

function initBackToTop() {

    const button =
        document.querySelector(
            "#backToTop"
        );

    if (!button) {
        return;
    }


    function updateVisibility() {

        if (window.scrollY > 500) {

            button.classList.add(
                "visible"
            );

        } else {

            button.classList.remove(
                "visible"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateVisibility,
        {
            passive: true
        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    updateVisibility();

}


/* ============================================================
   10. FORM
   ============================================================ */

function initForm() {

    const form =
        document.querySelector(
            "#leadForm"
        );

    if (!form) {
        return;
    }


    const nameInput =
        document.querySelector(
            "#name"
        );


    const contactInput =
        document.querySelector(
            "#contact"
        );


    const selectedStageInput =
        document.querySelector(
            "#selectedStage"
        );


    const nameError =
        document.querySelector(
            "#name-error"
        );


    const contactError =
        document.querySelector(
            "#contact-error"
        );


    const formMessage =
        document.querySelector(
            "#formMessage"
        );


    const submitButton =
        form.querySelector(
            ".form-button"
        );


    if (
        !nameInput ||
        !contactInput ||
        !formMessage ||
        !submitButton
    ) {
        return;
    }


    /* --------------------------------------------------------
       VALIDATION HELPERS
    -------------------------------------------------------- */

    function setFieldState(
        input,
        errorElement,
        message
    ) {

        const group =
            input.closest(
                ".input-group"
            );


        if (!group) {
            return;
        }


        group.classList.remove(
            "valid",
            "invalid"
        );


        if (message) {

            group.classList.add(
                "invalid"
            );


            errorElement.textContent =
                message;


            input.setAttribute(
                "aria-invalid",
                "true"
            );

        } else {

            group.classList.add(
                "valid"
            );


            errorElement.textContent =
                "";


            input.setAttribute(
                "aria-invalid",
                "false"
            );

        }

    }


    function validateName() {

        const value =
            nameInput.value.trim();


        if (!value) {

            setFieldState(
                nameInput,
                nameError,
                "Please enter your name."
            );

            return false;

        }


        if (value.length < 2) {

            setFieldState(
                nameInput,
                nameError,
                "Please enter at least 2 characters."
            );

            return false;

        }


        setFieldState(
            nameInput,
            nameError,
            ""
        );


        return true;

    }


    function validateContact() {

        const value =
            contactInput.value.trim();


        if (!value) {

            setFieldState(
                contactInput,
                contactError,
                "Please enter your Email or WhatsApp number."
            );

            return false;

        }


        if (value.length < 5) {

            setFieldState(
                contactInput,
                contactError,
                "Please enter a valid Email or WhatsApp number."
            );

            return false;

        }


        setFieldState(
            contactInput,
            contactError,
            ""
        );


        return true;

    }


    /* --------------------------------------------------------
       LIVE VALIDATION
    -------------------------------------------------------- */

    nameInput.addEventListener(
        "blur",
        validateName
    );


    contactInput.addEventListener(
        "blur",
        validateContact
    );


    nameInput.addEventListener(
        "input",
        () => {

            if (
                nameInput.value.trim()
            ) {

                validateName();

            }

        }
    );


    contactInput.addEventListener(
        "input",
        () => {

            if (
                contactInput.value.trim()
            ) {

                validateContact();

            }

        }
    );


    /* --------------------------------------------------------
       SUBMIT
    -------------------------------------------------------- */

    form.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            formMessage.textContent =
                "";

            formMessage.className =
                "form-message";


            const validName =
                validateName();


            const validContact =
                validateContact();


            if (
                !validName ||
                !validContact
            ) {

                formMessage.textContent =
                    "Please correct the highlighted fields.";

                formMessage.classList.add(
                    "error"
                );

                return;

            }


            /* Capture stage BEFORE reset */

            const submittedStage =
                selectedStageInput?.value ||
                "1";


            const formData = {

                name:
                    nameInput.value.trim(),

                contact:
                    contactInput.value.trim(),

                selectedStage:
                    submittedStage,

                source:
                    "Instagram"

            };


            /* Loading state */

            submitButton.disabled =
                true;


            const originalButtonHTML =
                submitButton.innerHTML;


            submitButton.innerHTML =
                `
                    <span>SUBMITTING...</span>
                    <b aria-hidden="true">→</b>
                `;


            try {

                const response =
                    await fetch(
                        INSTAGRAM_GOOGLE_APPS_SCRIPT_URL,
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "text/plain;charset=utf-8"
                            },

                            body:
                                JSON.stringify(
                                    formData
                                )
                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        `Request failed with status ${response.status}`
                    );

                }


                const result =
                    await response.json();


                if (
                    !result ||
                    result.success !== true
                ) {

                    throw new Error(
                        result?.error ||
                        "The form submission was not accepted."
                    );

                }


                /* ------------------------------------------------
                   SUCCESS
                ------------------------------------------------ */

                formMessage.textContent =
                    "Thank you! Your Digital Maturity Checklist request has been received.";

                formMessage.classList.add(
                    "success"
                );


                form.reset();


                /* Restore default stage */

                if (selectedStageInput) {

                    selectedStageInput.value =
                        "1";

                }


                if (
                    typeof window.selectStage ===
                    "function"
                ) {

                    window.selectStage(1);

                }


                /* Clear validation states */

                const groups =
                    form.querySelectorAll(
                        ".input-group"
                    );


                groups.forEach((group) => {

                    group.classList.remove(
                        "valid",
                        "invalid"
                    );

                });


                nameInput.setAttribute(
                    "aria-invalid",
                    "false"
                );


                contactInput.setAttribute(
                    "aria-invalid",
                    "false"
                );


                if (nameError) {

                    nameError.textContent =
                        "";

                }


                if (contactError) {

                    contactError.textContent =
                        "";

                }


                /* Optional Google Analytics event */

                if (
                    typeof window.gtag ===
                    "function"
                ) {

                    window.gtag(
                        "event",
                        "instagram_checklist_submission",
                        {
                            selected_stage:
                                submittedStage
                        }
                    );

                }

            } catch (error) {

                console.error(
                    "Instagram form submission error:",
                    error
                );


                formMessage.textContent =
                    "Something went wrong while sending your request. Please try again.";

                formMessage.classList.add(
                    "error"
                );

            } finally {

                submitButton.disabled =
                    false;


                submitButton.innerHTML =
                    originalButtonHTML;

            }

        }
    );

}


/* ============================================================
   11. SMOOTH ANCHORS
   ============================================================ */

function initSmoothAnchors() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    if (!links.length) {
        return;
    }


    links.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetID =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetID ||
                    targetID === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetID
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}