const radSubscriptionRequest = (e = "", s = {}) => fetch(e, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(s)
    }).then(e => e.json()),
    makeSubscriptionRequest = async (e, s) => {
        e.preventDefault();
        try {
            s.querySelector("#rad-subscription-submit").classList.add("is-loading"), await radSubscriptionRequest("", {
                email: s.querySelector("#rad-subscription-email").value
            }), s.classList.add("d-none"), document.querySelector("#rad-subscription-success").classList.remove("d-none"), document.querySelector("#rad-subscription-success").classList.add("d-flex")
        } catch (e) {
            s.classList.add("d-none"), document.querySelector("#rad-subscription-fail").classList.remove("d-none"), document.querySelector("#rad-subscription-fail").classList.add("d-flex")
        } finally {
            s.querySelector("#rad-subscription-submit").classList.remove("is-loading")
        }
    }, initRadSubscription = () => {
        const e = document.querySelector("#rad-subscription");
        e && e.addEventListener("submit", s => makeSubscriptionRequest(s, e))
    };
initRadSubscription();