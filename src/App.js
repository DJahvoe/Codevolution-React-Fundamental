import React from 'react';
import './App.css';
import Table from './components/11_fragments/Table';
import PureComp from './components/12_pure_components/PureComp';
import ParentComp from './components/12_pure_components/ParentComp';
import RefsDemo from './components/13_refs/RefsDemo';
import FocusInput from './components/13_refs/FocusInput';
import FRParentInput from './components/14_forwarding_refs/FRParentInput';
import PortalDemo from './components/15_portals/PortalDemo';
import Hero from './components/16_error_boundary/Hero';
import ErrorBoundary from './components/16_error_boundary/ErrorBoundary';
import ClickCounter from './components/17_higher_order_components/ClickCounter';
import HoverCounter from './components/17_higher_order_components/HoverCounter';
import ClickCounterTwo from './components/18_render_props/ClickCounterTwo';
import HoverCounterTwo from './components/18_render_props/HoverCounterTwo';
import User from './components/18_render_props/User';
import CounterProps from './components/18_render_props/CounterProps';
import CounterChildren from './components/18_render_props/CounterChildren';
import ComponentC from './components/19_context/ComponentC';
import { UserProvider } from './components/19_context/userContext';
import PostList from './components/20_http/PostList';
import PostForm from './components/20_http/PostForm';

function App() {
	return (
		<div className='App'>
			{/* 1_intro */}
			{/* <Greet1 />
			<Welcome1 />
			<Hello1 /> */}

			{/* 2_props */}
			{/* <Greet2 name='Bruce' heroName='Batman'>
				<p>This is a children props</p>
			</Greet2>
			<Greet2 name='Clark' heroName='Superman'>
				<button>Action</button>
			</Greet2>
			<Greet2 name='Diana' heroName='Wonder Woman' />
			<Welcome2 name='Bruce' heroName='Batman' />
			<Welcome2 name='Clark' heroName='Superman' />
			<Welcome2 name='Diana' heroName='Wonder Woman' /> */}

			{/* 3_state */}
			{/* <Message3 />
			<Counter3 /> */}

			{/* Destructuring */}
			{/* <Greet name='Diana' heroName='Wonder Woman' />
			<Welcome name='Diana' heroName='Wonder Woman' /> */}

			{/* <FunctionClick /> */}
			{/* <ClassClick /> */}
			{/* <EventBind /> */}
			{/* <ParentComponent /> */}
			{/* <ConditionalRendering /> */}
			{/* <ListRendering /> */}

			{/* <Stylesheet primary={true} /> */}
			{/* <Inline /> */}
			{/* <h1 className='error'>Error</h1> */}
			{/* <h1 className={styles.success}>Success</h1> */}
			{/* <FormHandling /> */}

			{/* <LifecycleA /> */}

			{/* <FragmentDemo /> */}
			{/* <Table /> */}

			{/* <PureComp /> */}
			{/* <ParentComp /> */}

			{/* <RefsDemo /> */}
			{/* <FocusInput /> */}
			{/* <FRParentInput /> */}

			{/* <PortalDemo /> */}

			{/* <ErrorBoundary>
				<Hero heroName='Batman' />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName='Superman' />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName='Joker' />
			</ErrorBoundary> */}

			{/* HOC */}
			{/* <ClickCounter name='Sav' />
			<HoverCounter name='Sav' /> */}

			{/* RENDER PROPS */}
			{/* <ClickCounterTwo />
			<HoverCounterTwo />
			<User render={(isLoggedIn) => (isLoggedIn ? 'Sav' : 'Guest')} /> */}
			{/* <CounterProps
				render={(count, incrementCount) => (
					<ClickCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/>
			<CounterProps
				render={(count, incrementCount) => (
					<HoverCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/>
			<CounterChildren>
				{(count, incrementCount) => (
					<ClickCounterTwo count={count} incrementCount={incrementCount} />
				)}
			</CounterChildren>
			<CounterChildren>
				{(count, incrementCount) => (
					<HoverCounterTwo count={count} incrementCount={incrementCount} />
				)}
			</CounterChildren> */}

			{/* CONTEXT */}
			{/* <UserProvider value='Sav'>
				<ComponentC />
			</UserProvider> */}

			{/* HTTP */}
			{/* <PostList /> */}
			<PostForm />
		</div>
	);
}

export default App;
