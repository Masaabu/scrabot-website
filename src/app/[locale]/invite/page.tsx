import { redirect } from 'next/navigation';

function page() {
  redirect('https://discord.com/oauth2/authorize?client_id=1330992974556823662&permissions=1125900175296512&integration_type=0&scope=bot')
}

export default page
