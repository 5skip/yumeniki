import { redirect } from "next/navigation";
import { getAuthSession } from "../../../lib/nextauth";
import { useState } from "react"
import { z } from "zod"
import { useForm, SubmitHandler } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { Loader2 } from "lucide-react"
// import { temporarrySignup } from "@/actions/user"
import Link from "next/link"

import { Center, Container, VStack, Spacer  } from "@yamada-ui/layouts";
const SignupPage = async () => {
	const user = await getAuthSession();

	if (user) {
			redirect("/calender");
	}

	return (
			<div>
				<h1>Signup</h1>
			</div>
	);  
}

export default SignupPage;