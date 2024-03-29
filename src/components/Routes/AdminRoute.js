import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute() {
    const [loading, setLoading] = useState(true);
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/api/v1/auth/admin-auth"
                );
                setOk(res.data.ok);
            } catch (error) {
                console.error("Error checking admin privileges:", error);
                setOk(false);
            } finally {
                setLoading(false);
            }
        };

        if (auth.token) {
            authCheck();
        } else {
            setLoading(false);
        }
    }, [auth?.token]);

    return loading ? (
        <div>Loading...</div>
    ) : ok ? (
        <Outlet />
    ) : (
        <Spinner path=""/>
    );
}