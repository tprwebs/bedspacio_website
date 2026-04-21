export function extractOdooError(err) {
    return (
        err?.response?.data?.message ||
        err?.response?.data?.error?.message ||
        err?.data?.message ||
        err?.message ||
        "Unknown error from Odoo"
    );
}