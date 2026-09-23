const INSTAGRAM_GOOGLE_APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwJWpAAnL9hlrwCcVrmJgZBS-4aFkB0xu5k-QY0qhSf1QNSGtAcBGUu5tNyl2T-r545Dg/exec";


/* =========================================================
   INITIALIZE ALL EXPERIENCES
========================================================= */

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


/* =========================================================
   SCROLL REVEAL
========================================================= */

function initScrollReveal() {
    const elements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right"
        );

    if (!elements.length) {
        return;
    }

    if (
        !("IntersectionObserver" in window)
    ) {
        elements.forEach((element) => {
            element.classList.add("visible");
        });

        return;
    }

    const observer =
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );

    elements.forEach((element) => {
        observer.observe(element);
    });
}


/* =========================================================
   CARD GLOW
========================================================= */

function initCardGlow() {
    const cards =
        document.querySelectorAll(
            ".glow-card, .maturity-card, .journey-card, .problem-card"
        );

    if (!cards.length) {
        return;
    }

    const supportsPointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;

    if (!supportsPointer) {
        return;
    }

    cards.forEach((card) => {
        card.addEventListener(
            "pointermove",
            (event) => {
                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                card.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                card.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );
            }
        );

        card.addEventListener(
            "pointerleave",
            () => {
                card.style.removeProperty(
                    "--mouse-x"
                );

                card.style.removeProperty(
                    "--mouse-y"
                );
            }
        );
    });
}


/* =========================================================
   MATURITY EXPERIENCE
========================================================= */

function initMaturityExperience() {
    const stageRows =
        document.querySelectorAll(
            ".maturity-stage"
        );

    if (!stageRows.length) {
        return;
    }

    const stageData = {
        1: {
            label: "MANUAL",
            title: "People are the system.",
            description:
                "Work depends on people remembering, copying, checking, and moving information between disconnected tools.",
            signal:
                "High manual effort",
            next:
                "Document and standardize repeatable work."
        },

        2: {
            label: "DIGITIZED",
            title:
                "The tools exist — but they are isolated.",
            description:
                "Your business uses digital tools, but information still lives in separate systems and requires manual handoffs.",
            signal:
                "Tools in silos",
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
                "Connected workflows",
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
                "Automated operations",
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
                "Intelligent operations",
            next:
                "Continuously optimize and scale."
        }
    };

    const progress =
        document.querySelector(
            "#stageProgress"
        );

    const status =
        document.querySelector(
            "#stageStatus"
        );

    const detailNumber =
        document.querySelector(
            "#stageDetailNumber"
        );

    const detailLabel =
        document.querySelector(
            "#stageDetailLabel"
        );

    const detailTitle =
        document.querySelector(
            "#stageDetailTitle"
        );

    const detailDescription =
        document.querySelector(
            "#stageDetailDescription"
        );

    const detailSignal =
        document.querySelector(
            "#stageDetailSignal"
        );

    const detailNext =
        document.querySelector(
            "#stageDetailNext"
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
                Number(
                    row.dataset.stage
                );

            row.classList.toggle(
                "active",
                rowStage === stageNumber
            );
        });

        if (progress) {
            progress.style.width =
                `${stageNumber * 20}%`;
        }

        if (status) {
            status.textContent =
                `${stageNumber} / 5`;
        }

        if (detailNumber) {
            detailNumber.textContent =
                String(stageNumber).padStart(
                    2,
                    "0"
                );
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
                stage.signal;
        }

        if (detailNext) {
            detailNext.textContent =
                stage.next;
        }

        if (selectedStageInput) {
            selectedStageInput.value =
                String(stageNumber);
        }

        try {
            sessionStorage.setItem(
                "bbw-selected-stage",
                String(stageNumber)
            );
        } catch (error) {
            // Ignore storage errors.
        }
    }

    stageRows.forEach((row) => {
        row.addEventListener(
            "click",
            () => {
                const stageNumber =
                    Number(
                        row.dataset.stage
                    );

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

        row.addEventListener(
            "keydown",
            (event) => {
                if (
                    event.key ===
                        "Enter" ||
                    event.key === " "
                ) {
                    event.preventDefault();

                    const stageNumber =
                        Number(
                            row.dataset.stage
                        );

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
            }
        );
    });

    let savedStage = 1;

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
            savedStage = storedStage;
        }
    } catch (error) {
        // Use stage 1.
    }

    selectStage(savedStage);

    /*
     * Make selectStage available to the form
     * so the visual stage can be reset after
     * a successful submission.
     */
    window.selectStage = selectStage;
}


/* =========================================================
   PROBLEM EXPERIENCE
========================================================= */

function initProblemExperience() {
    const cards =
        document.querySelectorAll(
            ".problem-card"
        );

    if (!cards.length) {
        return;
    }

    cards.forEach((card) => {
        card.addEventListener(
            "click",
            () => {
                cards.forEach((item) => {
                    item.classList.remove(
                        "active"
                    );
                });

                card.classList.add(
                    "active"
                );
            }
        );
    });
}


/* =========================================================
   STAGE JOURNEY
========================================================= */

function initStageJourney() {
    const cards =
        document.querySelectorAll(
            ".journey-card"
        );

    if (!cards.length) {
        return;
    }

    const detailNumber =
        document.querySelector(
            "#journeyDetailNumber"
        );

    const detailTitle =
        document.querySelector(
            "#journeyDetailTitle"
        );

    const detailDescription =
        document.querySelector(
            "#journeyDetailDescription"
        );

    cards.forEach((card) => {
        card.addEventListener(
            "click",
            () => {
                cards.forEach((item) => {
                    item.classList.remove(
                        "active"
                    );
                });

                card.classList.add(
                    "active"
                );

                const number =
                    card.dataset.number ||
                    card.dataset.stage ||
                    "";

                const title =
                    card.dataset.title ||
                    card.querySelector(
                        "strong"
                    )?.textContent ||
                    "";

                const description =
                    card.dataset.description ||
                    card.querySelector(
                        "small"
                    )?.textContent ||
                    "";

                if (detailNumber) {
                    detailNumber.textContent =
                        number;
                }

                if (detailTitle) {
                    detailTitle.textContent =
                        title;
                }

                if (detailDescription) {
                    detailDescription.textContent =
                        description;
                }
            }
        );
    });
}


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

function initMagneticButtons() {
    const buttons =
        document.querySelectorAll(
            ".magnetic"
        );

    if (!buttons.length) {
        return;
    }

    const supportsPointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (
        !supportsPointer ||
        reducedMotion
    ) {
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

                const strength = 0.12;

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


/* =========================================================
   BACK TO TOP
========================================================= */

function initBackToTop() {
    const button =
        document.querySelector(
            "#backToTop"
        );

    if (!button) {
        return;
    }

    function updateButton() {
        if (
            window.scrollY >
            500
        ) {
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
        updateButton,
        {
            passive: true
        }
    );

    updateButton();

    button.addEventListener(
        "click",
        () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


/* =========================================================
   INSTAGRAM LEAD FORM
   GOOGLE APPS SCRIPT → GOOGLE SHEETS + EMAIL
========================================================= */

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

    const message =
        document.querySelector(
            "#formMessage"
        );

    const submitButton =
        form.querySelector(
            ".form-button"
        );

    const submitText =
        submitButton?.querySelector(
            "span"
        );

    if (
        !nameInput ||
        !contactInput ||
        !message
    ) {
        return;
    }


    /* -----------------------------------------
       CLEAR ERRORS
    ----------------------------------------- */

    function clearErrors() {
        if (nameError) {
            nameError.textContent = "";
        }

        if (contactError) {
            contactError.textContent = "";
        }

        nameInput.removeAttribute(
            "aria-invalid"
        );

        contactInput.removeAttribute(
            "aria-invalid"
        );
    }


    /* -----------------------------------------
       VALIDATE NAME
    ----------------------------------------- */

    function validateName() {
        const value =
            nameInput.value.trim();

        if (!value) {
            if (nameError) {
                nameError.textContent =
                    "Please enter your name.";
            }

            nameInput.setAttribute(
                "aria-invalid",
                "true"
            );

            return false;
        }

        if (value.length < 2) {
            if (nameError) {
                nameError.textContent =
                    "Please enter at least 2 characters.";
            }

            nameInput.setAttribute(
                "aria-invalid",
                "true"
            );

            return false;
        }

        if (value.length > 60) {
            if (nameError) {
                nameError.textContent =
                    "Please keep your name under 60 characters.";
            }

            nameInput.setAttribute(
                "aria-invalid",
                "true"
            );

            return false;
        }

        return true;
    }


    /* -----------------------------------------
       VALIDATE CONTACT
    ----------------------------------------- */

    function validateContact() {
        const value =
            contactInput.value.trim();

        if (!value) {
            if (contactError) {
                contactError.textContent =
                    "Please enter your Email or WhatsApp number.";
            }

            contactInput.setAttribute(
                "aria-invalid",
                "true"
            );

            return false;
        }

        if (value.length < 5) {
            if (contactError) {
                contactError.textContent =
                    "Please enter a valid Email or WhatsApp number.";
            }

            contactInput.setAttribute(
                "aria-invalid",
                "true"
            );

            return false;
        }

        return true;
    }


    /* -----------------------------------------
       LIVE VALIDATION
    ----------------------------------------- */

    nameInput.addEventListener(
        "input",
        () => {
            if (
                nameInput.value.trim()
            ) {
                if (nameError) {
                    nameError.textContent =
                        "";
                }

                nameInput.removeAttribute(
                    "aria-invalid"
                );
            }
        }
    );

    contactInput.addEventListener(
        "input",
        () => {
            if (
                contactInput.value.trim()
            ) {
                if (contactError) {
                    contactError.textContent =
                        "";
                }

                contactInput.removeAttribute(
                    "aria-invalid"
                );
            }
        }
    );


    /* -----------------------------------------
       FORM SUBMISSION
    ----------------------------------------- */

    form.addEventListener(
        "submit",
        async (event) => {
            event.preventDefault();

            clearErrors();

            if (
                !validateName() ||
                !validateContact()
            ) {
                return;
            }


            /*
             * IMPORTANT:
             *
             * Capture the selected stage BEFORE
             * resetting the form.
             *
             * Otherwise the submitted stage would
             * become Stage 1 after form.reset().
             */
            const submittedStage =
                selectedStageInput?.value ||
                "1";


            /*
             * Build the data sent to Apps Script.
             */
            const data = {
                name:
                    nameInput.value.trim(),

                contact:
                    contactInput.value.trim(),

                selectedStage:
                    submittedStage,

                source:
                    "Instagram"
            };


            /*
             * Save original button text.
             */
            const originalText =
                submitText?.textContent ||
                "GET YOUR FREE CHECKLIST";


            try {
                /*
                 * Disable the button while submitting.
                 */
                if (submitButton) {
                    submitButton.disabled =
                        true;
                }

                if (submitText) {
                    submitText.textContent =
                        "SENDING...";
                }


                /*
                 * Clear previous status.
                 */
                message.classList.remove(
                    "success"
                );

                message.classList.remove(
                    "error"
                );

                message.textContent =
                    "Sending your checklist request...";


                /*
                 * Send JSON to Google Apps Script.
                 */
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
                                    data
                                )
                        }
                    );


                /*
                 * Check HTTP response.
                 */
                if (!response.ok) {
                    throw new Error(
                        `Server returned HTTP ${response.status}.`
                    );
                }


                /*
                 * Read Apps Script JSON response.
                 */
                const result =
                    await response.json();


                /*
                 * Check Apps Script success.
                 */
                if (
                    !result.success
                ) {
                    throw new Error(
                        result.error ||
                        "Submission failed."
                    );
                }


                /*
                 * SUCCESS
                 */
                message.textContent =
                    `Thanks, ${nameInput.value.trim()}. Your checklist request has been received.`;

                message.classList.add(
                    "success"
                );


                /*
                 * Reset the form.
                 */
                form.reset();


                /*
                 * Restore selected stage to Stage 1.
                 */
                if (
                    selectedStageInput
                ) {
                    selectedStageInput.value =
                        "1";
                }


                /*
                 * Restore the visual maturity
                 * experience to Stage 1.
                 */
                if (
                    typeof window.selectStage ===
                    "function"
                ) {
                    window.selectStage(1);
                }


                /*
                 * Clear any previous validation
                 * state.
                 */
                clearErrors();


                /*
                 * Analytics event.
                 *
                 * IMPORTANT:
                 * Use submittedStage here, not
                 * selectedStageInput.value,
                 * because the form has already
                 * been reset to Stage 1.
                 */
                if (
                    typeof window.gtag ===
                    "function"
                ) {
                    window.gtag(
                        "event",
                        "checklist_submission",
                        {
                            event_category:
                                "Instagram",
                            event_label:
                                "Digital Maturity Checklist",
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

                message.textContent =
                    "Something went wrong while submitting your request. Please try again.";

                message.classList.add(
                    "error"
                );

            } finally {
                /*
                 * Re-enable button.
                 */
                if (submitButton) {
                    submitButton.disabled =
                        false;
                }

                if (submitText) {
                    submitText.textContent =
                        originalText;
                }
            }
        }
    );
}


/* =========================================================
   SMOOTH ANCHORS
========================================================= */

function initSmoothAnchors() {
    const anchors =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    if (!anchors.length) {
        return;
    }

    anchors.forEach((anchor) => {
        anchor.addEventListener(
            "click",
            (event) => {
                const href =
                    anchor.getAttribute(
                        "href"
                    );

                if (
                    !href ||
                    href === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        href
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