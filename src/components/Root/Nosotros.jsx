import styled from "styled-components";
import { sm, md, xl } from "../../breakpoints";
import consultorio from "../../assets/consultorio.png";

const Nosotros = ({ setToggle }) => {
	return (
		<Container>
			<div className="container lg">
				<div className="item item1">
					<div className="imageContainer">
						<img src={consultorio} alt="" />
					</div>

					<div className="textContainer">
						<h2>Especialistas en ecografias</h2>
						<hr />
						<p>Desde el 2019 liderando en Linares y Colbún</p>
						<p>
							No más esperas de semanas para tener el resultado de tus exámenes,
							tu salud no puede esperar.
						</p>
						<p>
							Nuestro plazo de entrega es de menos de 48 horas, y puedes recibir
							el resultado de tus exámenes en formato físico o digital en tu
							correo electrónico o WhatsApp.
						</p>
					</div>
				</div>

				<div className="item item2">
					<h3>Agenda tu hora para ecografías</h3>
					<button onClick={() => setToggle(true)}>Agenda tu hora</button>
				</div>

				<div className="item item3" id="ecografias">
					<h2>Tipos de ecografías</h2>
					<hr />
					<p>
						Recibe los resultados de tus exámenes en menos de 48 hrs, en formato
						físico o digital en tu correo electrónico o WhatsApp.
					</p>

					<Ecografias>
						<div className="tile tile1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Image"
								height="512"
								viewBox="0 0 64 64"
								width="512"
							>
								<g>
									<path d="m52.047 35.708c-1.567-3.774-3.047-7.338-3.047-12.708 0-1.291.212-3.3.436-5.428.264-2.513.564-5.362.564-7.572 0-.552-.447-1-1-1s-1 .448-1 1c0 2.105-.294 4.898-.554 7.363-.229 2.181-.446 4.241-.446 5.637 0 5.769 1.555 9.512 3.2 13.475 1.868 4.498 3.8 9.15 3.8 17.525 0 .552.447 1 1 1s1-.448 1-1c0-8.774-2.1-13.831-3.953-18.292z"></path>
									<path d="m16 10c0-.552-.447-1-1-1s-1 .448-1 1c0 2.21.3 5.059.564 7.572.224 2.128.436 4.137.436 5.428 0 5.37-1.48 8.934-3.047 12.708-1.853 4.461-3.953 9.518-3.953 18.292 0 .552.447 1 1 1s1-.448 1-1c0-8.375 1.932-13.027 3.8-17.525 1.645-3.963 3.2-7.706 3.2-13.475 0-1.396-.217-3.456-.446-5.637-.26-2.465-.554-5.258-.554-7.363z"></path>
									<path d="m32.622 34.783c.43-.341.504-.966.165-1.399-.341-.435-.969-.513-1.403-.171-.127.099-1.235 1.005-1.235 2.343 0 .577.214 1.433 1.235 2.232.183.143.4.212.615.212.297 0 .592-.132.788-.384.341-.435.264-1.063-.171-1.404-.212-.166-.466-.414-.468-.653-.002-.292.318-.648.474-.776z"></path>
								</g>
							</svg>

							<h4>abdominal</h4>
						</div>
						<div className="tile tile2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Layer_1"
								height="512"
								viewBox="0 0 480.007 480.007"
								width="512"
							>
								<g>
									<path d="m434.077 55.982c-33.87-27.021-94.424-39.483-124.868-7.466-20.507 21.568-24.163 58.445-9.314 93.948 3.177 7.596 5.259 15.496 6.246 23.545-33.43 18.867-52.477 51.76-52.375 91.618v184.904c.012 4.411 3.829 7.979 8.238 7.979 4.422 0 7.773-3.591 7.762-8.021v-184.903c-.104-40.659 23.428-72.832 63.349-86.063 1.809-.6 3.561-1.301 5.26-2.084 15.143 7.925 26.283 20.628 32.446 35.399 1.699 4.072 6.38 6.007 10.463 4.303 4.078-1.701 6.004-6.386 4.303-10.463-1.564-3.749-3.39-7.354-5.441-10.819 7.455-2.164 13.521-6.519 17.786-12.069 11.971 2.518 24.364-.94 33.3-9.19 3.246-2.998 3.448-8.06.451-11.305-2.998-3.246-8.06-3.448-11.305-.451-4.017 3.71-9.601 6.024-15.777 5.703 1.198-6.402.542-11.5.387-12.52-.664-4.361-4.743-7.349-9.093-6.691-4.362.653-7.37 4.731-6.726 9.096.067.457 1.561 11.272-6.384 18.22-4.744 4.148-10.303 4.769-13.399 4.735-4.944-5.379-10.491-10.066-16.583-14.016 9.712-9.723 15.498-23.436 15.685-38.767.055-4.455-3.541-8.098-8.001-8.098-4.372 0-7.943 3.518-7.997 7.902-.211 17.24-9.564 31.006-24.41 35.927-2.332.773-4.603 1.616-6.839 2.499-1.343-7.691-3.531-15.241-6.586-22.544-12.211-29.195-9.74-60.039 6.148-76.749 24.607-25.88 76.747-12.231 103.294 8.948 58.31 46.519 50.9 172.658-10.26 215.348-24.132 16.843-69.404 28.771-91.642 7.363-8.68-8.358-13.549-21.552-14.101-36.865 9.594 3.465 19.793 5.24 30.419 5.103-1.51 9.304 1.564 18.376 7.529 24.878 1.578 1.719 3.733 2.591 5.896 2.591 6.908 0 10.601-8.277 5.893-13.409-3.942-4.296-4.957-10.493-1.962-16.06 7.703-1.691 14.212-4.205 19.224-6.608 3.984-1.911 5.665-6.689 3.755-10.673-1.911-3.983-6.688-5.662-10.673-3.755-18.491 8.867-39.848 9.526-59.04 1.109.375-2.419.843-4.862 1.414-7.323.998-4.304-1.682-8.603-5.985-9.601-4.305-.998-8.602 1.681-9.601 5.985-11.247 48.487 9.075 92.148 60.499 92.148 23.266 0 49.195-8.966 67.532-21.764 69.643-48.609 78.005-187.583 11.083-240.974z"></path>
									<path d="m151.926 156.336c-14.846-4.921-24.199-18.687-24.41-35.927-.054-4.385-3.624-7.902-7.997-7.902-4.455 0-8.056 3.638-8.001 8.098.187 15.332 5.973 29.044 15.685 38.767-6.092 3.949-11.638 8.636-16.582 14.015-3.095.033-8.656-.587-13.4-4.734-7.944-6.947-6.451-17.763-6.384-18.216.665-4.368-2.337-8.448-6.705-9.113-4.368-.657-8.447 2.338-9.113 6.705-.155 1.02-.811 6.117.387 12.52-6.105.317-11.721-1.958-15.777-5.703-3.245-2.996-8.307-2.797-11.305.451-2.997 3.245-2.795 8.307.451 11.305 8.785 8.112 21.129 11.75 33.3 9.19 4.255 5.536 10.316 9.901 17.786 12.069-2.05 3.465-3.877 7.07-5.44 10.819-1.701 4.077.225 8.762 4.303 10.463 4.103 1.711 8.772-.249 10.463-4.303 6.162-14.769 17.301-27.473 32.446-35.399 5.147 2.372 7.429 2.446 15.57 6.086-.155 13.25 2.238 26.155 7.138 38.437 3.159 7.917 5.319 15.858 6.519 23.552-19.518 8.558-40.902 7.583-59.031-1.113-3.981-1.908-8.762-.229-10.673 3.755-1.91 3.983-.229 8.762 3.755 10.673 5.012 2.404 11.521 4.917 19.224 6.609 2.981 5.541 1.999 11.742-1.963 16.059-2.987 3.256-2.77 8.316.485 11.304 3.277 3.007 8.335 2.748 11.304-.485 5.962-6.499 9.04-15.569 7.529-24.878 10.833.14 21.018-1.703 30.443-5.111-.511 15.2-5.286 28.364-14.125 36.874-22.238 21.411-67.511 9.48-91.642-7.363-61.166-42.698-68.561-168.837-10.257-215.35 26.547-21.18 78.686-34.831 103.294-8.948 13.522 14.222 17.521 38.903 10.434 64.411-1.183 4.257 1.31 8.667 5.566 9.85 4.257 1.182 8.667-1.311 9.85-5.566 8.584-30.897 3.122-61.444-14.254-79.72-30.421-31.991-90.98-19.57-124.868 7.466-66.92 53.388-58.564 192.365 11.08 240.975 18.292 12.768 44.216 21.765 67.532 21.765 59.127-.003 75.911-57.419 54.66-110.688-2.995-7.505-4.871-15.292-5.625-23.27 23.588 16.533 36.743 42.284 36.664 72.824v184.904c-.012 4.418 3.323 8.015 7.741 8.021 4.51.006 8.247-3.64 8.259-7.979v-184.908c.123-47.912-27.509-85.778-74.316-101.291z"></path>
								</g>
							</svg>

							<h4>Renal</h4>
						</div>
						<div className="tile tile3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Layer_1"
								height="512"
								viewBox="0 0 480.039 480.039"
								width="512"
							>
								<g>
									<path d="m294.215 317.07c-36.445-9.725-71.877-9.73-108.322-.023-18.958 5.051-32.208 22.339-32.222 42.042-.004 5.969-.009 13.333-.013 22.398-27.526 18.484-27.707 29.392-46.418 37.815-53.064 23.893-94.878-5.098-78.542-82.209 4.746-22.398 2.243-75.444-6.72-96.989-24.095-57.917 29.491-117.246 85.551-94.62 4.097 1.655 8.759-.326 10.413-4.424 1.654-4.097-.327-8.759-4.424-10.412-68.754-27.757-135.996 44.243-106.311 115.603 7.49 18.005 9.913 68.301 5.84 87.526-19.303 91.112 36.526 129.035 100.762 100.115 8.966-4.036 16.587-9.606 23.297-17.028 5.127-5.67 10.666-10.862 16.545-15.55-.005 16.802-.009 37.755-.009 63.896 0 4.418 3.582 8 8 8s8-3.582 8-8c0-55.38.017-87.494.03-106.11.009-12.47 8.373-23.404 20.34-26.593 33.671-8.97 66.407-8.962 100.079.021 11.931 3.183 20.27 14.108 20.278 26.569.013 18.6.029 50.702.029 106.112 0 4.418 3.582 8 8 8s8-3.582 8-8c0-55.416-.017-87.522-.029-106.123-.013-19.691-13.235-36.969-32.154-42.016z"></path>
									<path d="m366.521 130.648c-13.527 5.459-16.783 15.47-40.134 27.451.003-8.188.006-17.578.008-28.55 1.257-.334 2.514-.664 3.768-1.013 4.257-1.183 6.749-5.593 5.566-9.85-1.183-4.258-5.594-6.748-9.85-5.566-51.035 14.182-104.717 15.475-156.234 3.887-.001-10.129-.002-21.453-.003-34.179h149.378c20.953 0 38-17.047 38-38s-17.047-38-38-38h-158c-20.953 0-38 17.047-38 38 0 18.429 13.189 33.83 30.622 37.275 0 11.365.001 21.615.002 30.901-4.093-.853-8.197 1.598-9.332 5.683-1.183 4.257 1.309 8.666 5.566 9.85 1.254.349 2.512.679 3.768 1.013.005 27.287.013 43.331.029 68.667.012 19.699 13.241 36.981 32.17 42.026 36.413 9.703 71.839 9.737 108.315.009 18.95-5.053 32.193-22.341 32.205-42.04.005-8.972.008-13.162.013-22.355 29.794-13.335 35.939-26.256 46.131-30.372 56.111-22.647 109.618 36.771 85.551 94.62-8.963 21.545-11.465 74.591-6.72 96.989 16.354 77.196-25.535 106.073-78.542 82.209-6.911-3.111-12.798-7.419-17.998-13.169-2.964-3.278-8.023-3.533-11.299-.568-3.277 2.963-3.532 8.021-.569 11.299 6.711 7.422 14.332 12.992 23.297 17.028 64.247 28.924 120.063-9.014 100.762-100.115-4.073-19.226-1.65-69.521 5.84-87.526 29.694-71.376-37.599-143.341-106.31-115.604zm-227.501-85.819c0-12.131 9.869-22 22-22h158c12.131 0 22 9.869 22 22s-9.869 22-22 22h-158c-12.131 0-22-9.869-22-22zm171.346 153.373c-.007 12.467-8.367 23.4-20.328 26.591-33.645 8.973-66.379 8.969-100.072-.011-11.939-3.182-20.283-14.11-20.291-26.575-.015-23.634-.022-38.16-.028-64.827 46.437 9.927 94.264 9.934 140.746 0-.006 31.225-.016 46.701-.027 64.822z"></path>
									<path d="m86.177 190.671c-3.124-3.123-8.189-3.123-11.313 0l-9.5 9.5c-5.054 5.055-1.407 13.657 5.657 13.657 2.047 0 4.095-.781 5.657-2.343l9.5-9.5c3.123-3.124 3.123-8.189-.001-11.314z"></path>
									<path d="m115.363 271.486c3.125 3.124 8.189 3.123 11.313 0l9.5-9.5c3.125-3.125 3.125-8.189 0-11.314-3.124-3.123-8.189-3.123-11.313 0l-9.5 9.5c-3.124 3.124-3.124 8.189 0 11.314z"></path>
									<path d="m64.863 280.671-9.5 9.5c-3.125 3.125-3.125 8.189 0 11.314 3.125 3.124 8.189 3.123 11.313 0l9.5-9.5c3.125-3.125 3.125-8.189 0-11.314-3.123-3.123-8.189-3.123-11.313 0z"></path>
									<path d="m90.02 362.829c2.047 0 4.095-.781 5.657-2.343l9.5-9.5c3.125-3.125 3.125-8.189 0-11.314-3.124-3.123-8.189-3.123-11.313 0l-9.5 9.5c-5.055 5.054-1.408 13.657 5.656 13.657z"></path>
									<path d="m373.863 180.671-9.5 9.5c-3.125 3.125-3.125 8.189 0 11.314 3.125 3.124 8.189 3.123 11.313 0l9.5-9.5c3.125-3.125 3.125-8.189 0-11.314-3.123-3.123-8.189-3.123-11.313 0z"></path>
									<path d="m410.02 253.829c2.047 0 4.095-.781 5.657-2.343l9.5-9.5c3.125-3.125 3.125-8.189 0-11.314-3.124-3.123-8.189-3.123-11.313 0l-9.5 9.5c-5.055 5.054-1.408 13.657 5.656 13.657z"></path>
									<path d="m353.863 270.671-9.5 9.5c-3.125 3.125-3.125 8.189 0 11.314 3.125 3.124 8.189 3.123 11.313 0l9.5-9.5c3.125-3.125 3.125-8.189 0-11.314-3.123-3.123-8.189-3.123-11.313 0z"></path>
									<path d="m391.863 328.671-9.5 9.5c-3.125 3.125-3.125 8.189 0 11.314 3.125 3.124 8.189 3.123 11.313 0l9.5-9.5c3.125-3.125 3.125-8.189 0-11.314-3.123-3.123-8.189-3.123-11.313 0z"></path>
								</g>
							</svg>

							<h4>Tiroides</h4>
						</div>
						<div className="tile tile4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Layer_1"
								height="512"
								viewBox="0 0 480.005 480.005"
								width="512"
							>
								<g>
									<path d="m222.964 201.227c-4.418 0-8 3.582-8 8 0 86.979-128.602 83.478-128.602-6.386 0-46.189 33.347-49.29 47.104-86.794 1.521-4.148-.608-8.744-4.756-10.266-4.149-1.52-8.744.609-10.266 4.756-11.762 32.068-48.083 39.469-48.083 92.304 0 110.886 160.602 114.404 160.602 6.386.001-4.418-3.581-8-7.999-8z"></path>
									<path d="m146.809 205.551c-4.418 0-8 3.582-8 8v7.354c0 4.418 3.582 8 8 8s8-3.582 8-8v-7.354c0-4.418-3.581-8-8-8z"></path>
									<path d="m128.898 306.199c-4.389.507-7.536 4.477-7.029 8.865 6.436 55.723-26.361 101.348-45.122 154.266-1.477 4.164.703 8.736 4.867 10.213 4.172 1.479 8.74-.711 10.213-4.867 18.427-51.971 52.95-100.723 45.937-161.447-.508-4.389-4.479-7.546-8.866-7.03z"></path>
									<path d="m358.136 315.064c.507-4.389-2.64-8.358-7.029-8.865-4.394-.512-8.358 2.641-8.865 7.029-7.015 60.741 27.521 109.507 45.937 161.447 1.163 3.281 4.248 5.329 7.54 5.329 5.5 0 9.39-5.458 7.54-10.675-18.756-52.9-51.559-98.544-45.123-154.265z"></path>
									<path d="m361.56 110.538c-1.522-4.146-6.116-6.275-10.266-4.756-4.148 1.521-6.277 6.117-4.756 10.266 13.779 37.563 47.104 40.634 47.104 86.794 0 89.86-128.602 93.303-128.602 6.386 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 108.441 160.602 104.273 160.602-6.386.001-52.593-36.453-60.597-48.082-92.304z"></path>
									<path d="m325.196 220.905c0 4.418 3.582 8 8 8s8-3.582 8-8v-7.354c0-4.418-3.582-8-8-8s-8 3.582-8 8z"></path>
									<path d="m240.002 405.002c-4.418 0-8 3.582-8 8v17.807c0 4.418 3.582 8 8 8s8-3.582 8-8v-17.807c0-4.418-3.581-8-8-8z"></path>
									<path d="m84.167 80.889 61.655-21.259c23.321-8.041 42.044-25.757 51.369-48.605 1.669-4.09-.293-8.76-4.384-10.43-4.093-1.67-8.761.293-10.43 4.385-7.583 18.58-22.808 32.985-41.771 39.523l-61.655 21.259c-37.946 13.084-61.231 50.363-56.625 90.655 13.099 114.593 11.792 212.347 5.035 254.68-.776 4.86 2.98 9.262 7.91 9.262 3.862 0 7.262-2.804 7.89-6.74 7.155-44.826 8.404-142.301-4.938-259.018-3.748-32.781 15.145-63.092 45.944-73.712z"></path>
									<path d="m401.054 65.762-61.655-21.258c-18.963-6.54-34.188-20.945-41.771-39.524-1.669-4.09-6.336-6.051-10.43-4.385-4.091 1.67-6.053 6.34-4.384 10.43 9.324 22.848 28.047 40.562 51.368 48.605l61.655 21.259c30.799 10.619 49.692 40.931 45.945 73.712-13.341 116.716-12.094 214.19-4.938 259.017.69 4.325 4.75 7.335 9.161 6.64 4.363-.697 7.335-4.799 6.639-9.161-6.757-42.333-8.063-140.087 5.035-254.679 4.606-40.292-18.679-77.572-56.625-90.656z"></path>
									<path d="m150.743 81.582c-1.462 4.169.733 8.734 4.902 10.196 37.236 13.054 51.396 5.257 60.529 19.908 1.517 2.433 4.126 3.769 6.797 3.769 6.205 0 10.122-6.873 6.781-12.233-13.829-22.183-33.17-14.047-68.813-26.543-4.172-1.462-8.734.733-10.196 4.903z"></path>
									<path d="m252.809 114.243c3.764 2.346 8.693 1.178 11.021-2.557 9.135-14.654 23.274-6.847 60.529-19.908 4.169-1.462 6.364-6.027 4.902-10.196s-6.024-6.364-10.196-4.903c-35.586 12.476-54.995 4.378-68.813 26.543-2.337 3.749-1.192 8.683 2.557 11.021z"></path>
								</g>
							</svg>

							<h4>Mamaria</h4>
						</div>
						<div className="tile tile5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Layer_1"
								height="512"
								viewBox="0 0 480.003 480.003"
								width="512"
							>
								<g>
									<path d="m275.56 67.738c48.403-.985 94.122-1.917 131.453-55.144 2.537-3.617 1.661-8.606-1.956-11.144-3.618-2.537-8.606-1.662-11.144 1.956-67.639 96.44-171.053-3.13-282.344 108.161-111.153 111.155-11.792 214.757-108.161 282.346-3.617 2.537-4.493 7.526-1.956 11.144 2.534 3.612 7.522 4.497 11.144 1.956 53.226-37.331 54.158-83.05 55.144-131.453.997-48.947 2.028-99.562 55.144-152.677s103.729-54.147 152.676-55.145z"></path>
									<path d="m478.551 74.945c-2.537-3.616-7.526-4.493-11.144-1.956-53.226 37.331-54.158 83.05-55.144 131.453-.997 48.947-2.028 99.562-55.144 152.677s-103.73 54.146-152.678 55.145c-48.403.985-94.122 1.917-131.453 55.144-2.537 3.617-1.661 8.606 1.956 11.144 3.638 2.551 8.621 1.641 11.144-1.956 67.64-96.44 171.053 3.13 282.344-108.161 111.154-111.155 11.794-214.757 108.163-282.346 3.617-2.537 4.493-7.526 1.956-11.144z"></path>
									<path d="m352.157 125.054c4.281-1.093 6.866-5.448 5.773-9.729-1.093-4.28-5.449-6.866-9.73-5.772-68.049 17.37-120.915 71.222-137.967 140.538-.74 3.008.323 6.174 2.729 8.125 12.155 9.857 25.936 13.964 41.167 10.117 43.775-11.056 78.608-84.538 91.552-115.618 1.699-4.079-.231-8.763-4.31-10.461-4.079-1.699-8.762.23-10.461 4.309-19.322 46.396-50.669 98.673-80.7 106.258-8.028 2.025-15.623.695-23.09-4.074 16.941-61.074 64.418-108.219 125.037-123.693z"></path>
									<path d="m182.22 213.145c-1.197 5.018 2.608 9.858 7.789 9.858 3.618 0 6.898-2.472 7.775-6.146 10.677-44.753 37.716-83.316 76.136-108.587 2.986-1.964 4.307-5.67 3.236-9.08s-4.3-5.722-7.846-5.601c-35.508.949-69.322 12.73-97.785 34.071-1.728 1.295-2.858 3.233-3.135 5.375-1.099 8.503-1.474 17.114-1.116 25.595.186 4.415 3.907 7.843 8.33 7.656 4.414-.187 7.842-3.916 7.655-8.33-.272-6.458-.068-13.004.607-19.507 17.521-12.556 37.164-21.199 57.938-25.583-29.463 26.427-50.257 61.184-59.584 100.279z"></path>
									<path d="m130.129 355.849c3.527 2.685 8.544 1.986 11.211-1.517 45.457-59.675 32.833-87.443 19.467-116.843-8.154-17.937-16.586-36.483-12.092-65.713.62-4.032-1.557-7.988-5.293-9.621-3.734-1.631-8.115-.541-10.653 2.653-33.095 41.682-50.061 100.1-31.763 149.539 1.534 4.143 6.135 6.259 10.279 4.726 4.144-1.534 6.259-6.137 4.726-10.28-12.593-34.022-6.326-76.88 15.657-114.191 3.996 61.933 56.882 71.351-3.055 150.035-2.678 3.514-1.998 8.534 1.516 11.212z"></path>
									<path d="m189.14 384.881c24.795 3.823 50.403.281 73.714-8.157 80.362-29.093 135.785-115.62 121.281-191.926-1.64-8.633-13.453-10.032-17.056-2.013-21.032 46.799-49.21 80.292-83.752 99.549-25.839 14.403-57.093 22.231-78.309 37.978-3.548 2.633-4.29 7.644-1.657 11.191 2.633 3.549 7.645 4.291 11.192 1.656 19.003-14.103 49.885-21.978 76.564-36.851 31.666-17.652 58.267-45.951 79.297-84.297-1.684 88.722-93.76 170.173-178.837 157.057-4.37-.68-8.453 2.321-9.125 6.688-.673 4.367 2.321 8.452 6.688 9.125z"></path>
								</g>
							</svg>

							<h4>Musculo Esquelética</h4>
						</div>
						<div className="tile tile6">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="512"
								height="512"
								viewBox="0 0 128 128"
							>
								<g>
									<path d="M123.849,7.612a12.767,12.767,0,0,0-20.041-4.5A12.875,12.875,0,0,0,100.5,18a23.817,23.817,0,0,1,1.065,3.107,24.966,24.966,0,0,0-17.34,23.8v9.066a13.541,13.541,0,0,1-6.9,11.79l-1.153.648A16.646,16.646,0,0,0,66.753,63.5H61.247a16.646,16.646,0,0,0-9.421,2.912l-1.153-.648a13.541,13.541,0,0,1-6.9-11.79V44.9a24.966,24.966,0,0,0-17.34-23.8A23.868,23.868,0,0,1,27.5,18,12.875,12.875,0,0,0,24.192,3.112a12.767,12.767,0,0,0-20.041,4.5A50.034,50.034,0,0,0,1.337,38.966a12.578,12.578,0,0,0,7.391,8.749A12.765,12.765,0,0,0,26.317,33.726,13.562,13.562,0,0,1,32.275,44.9v9.066A25.053,25.053,0,0,0,45.037,75.782l.074.042a16.6,16.6,0,0,0,6.308,17.949,11.908,11.908,0,0,0,5.456,17.735v14.739a1.749,1.749,0,0,0,1.75,1.75h10.75a1.749,1.749,0,0,0,1.75-1.75V111.508a11.908,11.908,0,0,0,5.456-17.735,16.6,16.6,0,0,0,6.308-17.949l.074-.042A25.053,25.053,0,0,0,95.725,53.969V44.9a13.564,13.564,0,0,1,5.958-11.178,12.751,12.751,0,0,0,17.588,13.99,12.577,12.577,0,0,0,7.392-8.749A50.034,50.034,0,0,0,123.849,7.612ZM18.478,43.949A9.218,9.218,0,0,1,10.1,44.5a9.114,9.114,0,0,1-5.357-6.336A46.509,46.509,0,0,1,7.358,9.013a9.115,9.115,0,0,1,6.4-5.282,9.485,9.485,0,0,1,2.1-.237,9.207,9.207,0,0,1,6.048,2.267,9.385,9.385,0,0,1,2.376,10.86,27.492,27.492,0,0,0-1.614,5.222c-.005.017-.013.032-.018.05-.009.037-.009.074-.016.111a28.035,28.035,0,0,0-.378,8.641c0,.026.006.052.008.079a27.19,27.19,0,0,0,.487,2.961A9.385,9.385,0,0,1,18.478,43.949Zm17.3,10.02V44.9A17.09,17.09,0,0,0,25.636,29.36a24.424,24.424,0,0,1,.124-4.8A21.48,21.48,0,0,1,40.275,44.9v9.066A17.047,17.047,0,0,0,48.957,68.81l.057.032A16.81,16.81,0,0,0,46.4,72.519,21.545,21.545,0,0,1,35.775,53.969Zm39.351,46.465a8.451,8.451,0,0,1-6.212,8.13,1.749,1.749,0,0,0-1.289,1.688V124.5h-7.25V110.252a1.749,1.749,0,0,0-1.289-1.688,8.408,8.408,0,0,1-4.629-13.027,16.635,16.635,0,0,0,6.79,1.452h5.506a16.635,16.635,0,0,0,6.79-1.452A8.374,8.374,0,0,1,75.126,100.434Zm-8.373-6.945H61.247a13.247,13.247,0,0,1,0-26.494h5.506a13.247,13.247,0,0,1,0,26.494ZM92.225,44.9v9.066A21.545,21.545,0,0,1,81.6,72.519a16.811,16.811,0,0,0-2.613-3.678l.057-.031a17.048,17.048,0,0,0,8.683-14.841V44.9A21.484,21.484,0,0,1,102.24,24.554a24.432,24.432,0,0,1,.124,4.806A17.086,17.086,0,0,0,92.225,44.9Zm31.032-6.744A9.114,9.114,0,0,1,117.9,44.5a9.217,9.217,0,0,1-8.379-.546,9.386,9.386,0,0,1-4.271-10.264,27.121,27.121,0,0,0,.489-2.986c0-.016,0-.032,0-.048a27.984,27.984,0,0,0-.377-8.643c-.007-.039-.007-.078-.016-.116,0-.018-.014-.034-.019-.051a27.447,27.447,0,0,0-1.613-5.22A9.385,9.385,0,0,1,106.1,5.761a9.2,9.2,0,0,1,6.048-2.267,9.478,9.478,0,0,1,2.1.237,9.115,9.115,0,0,1,6.4,5.282A46.509,46.509,0,0,1,123.257,38.159Z"></path>
									<path d="M116.517,10.813A4.691,4.691,0,0,0,112.156,8a1.75,1.75,0,0,0,0,3.5,1.234,1.234,0,0,1,1.154.716,38.239,38.239,0,0,1,1.877,5.38,1.75,1.75,0,0,0,1.69,1.3,1.751,1.751,0,0,0,1.691-2.2A41.332,41.332,0,0,0,116.517,10.813Z"></path>
									<path d="M15.844,8a4.691,4.691,0,0,0-4.361,2.816,41.332,41.332,0,0,0-2.051,5.876,1.749,1.749,0,1,0,3.38.9,38.243,38.243,0,0,1,1.878-5.38,1.233,1.233,0,0,1,1.154-.716,1.75,1.75,0,1,0,0-3.5Z"></path>
								</g>
							</svg>

							<h4>Prostática</h4>
						</div>
						<div className="tile tile7">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Capa_1"
								height="512"
								viewBox="0 0 512 512"
								width="512"
							>
								<g>
									<path d="m263.5 0h-195c-37.22 0-67.5 30.28-67.5 67.5v279.5c0 90.981 74.019 165 165 165s165-74.019 165-165v-279.5c0-37.22-30.28-67.5-67.5-67.5zm52.5 347c0 82.71-67.29 150-150 150s-150-67.29-150-150v-279.5c0-28.949 23.552-52.5 52.5-52.5h195c28.948 0 52.5 23.551 52.5 52.5z"></path>
									<path d="m503.5 60h-150c-4.143 0-7.5 3.358-7.5 7.5v41.833c0 13.371 3.92 26.318 11.337 37.441l18.663 27.997v194.729c0 4.142 3.357 7.5 7.5 7.5h7.5v52.5c0 4.142 3.357 7.5 7.5 7.5h7.5v67.5c0 4.142 3.357 7.5 7.5 7.5h30c4.143 0 7.5-3.358 7.5-7.5v-67.5h7.5c4.143 0 7.5-3.358 7.5-7.5v-52.5h7.5c4.143 0 7.5-3.358 7.5-7.5v-194.729l18.663-27.996c7.417-11.124 11.337-24.071 11.337-37.442v-41.833c0-4.142-3.357-7.5-7.5-7.5zm-67.5 437h-15v-60h15zm-30-75v-15h45v15zm45-30h-45v-15h45zm45-282.667c0 10.399-3.049 20.469-8.817 29.121l-19.923 29.886c-.821 1.232-1.26 2.68-1.26 4.16v189.5h-75v-189.5c0-1.48-.438-2.928-1.26-4.16l-19.923-29.886c-5.769-8.651-8.817-18.721-8.817-29.121v-34.333h135z"></path>
									<circle cx="256" cy="317" r="7.5"></circle>
									<circle cx="211" cy="347" r="7.5"></circle>
									<circle cx="241" cy="347" r="7.5"></circle>
									<circle cx="226" cy="317" r="7.5"></circle>
									<circle cx="181" cy="347" r="7.5"></circle>
									<circle cx="151" cy="347" r="7.5"></circle>
									<circle cx="121" cy="347" r="7.5"></circle>
									<circle cx="91" cy="347" r="7.5"></circle>
									<circle cx="196" cy="317" r="7.5"></circle>
									<circle cx="166" cy="317" r="7.5"></circle>
									<circle cx="136" cy="317" r="7.5"></circle>
									<circle cx="106" cy="317" r="7.5"></circle>
									<circle cx="76" cy="317" r="7.5"></circle>
									<circle cx="256" cy="377" r="7.5"></circle>
									<circle cx="226" cy="377" r="7.5"></circle>
									<circle cx="196" cy="377" r="7.5"></circle>
									<circle cx="166" cy="377" r="7.5"></circle>
									<circle cx="136" cy="377" r="7.5"></circle>
									<circle cx="106" cy="377" r="7.5"></circle>
									<circle cx="76" cy="377" r="7.5"></circle>
									<path d="m263.5 30h-195c-20.678 0-37.5 16.822-37.5 37.5v49.75c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-49.75c0-12.407 10.094-22.5 22.5-22.5h195c12.406 0 22.5 10.093 22.5 22.5v174.5c0 20.678-16.822 37.5-37.5 37.5h-165c-20.678 0-37.5-16.822-37.5-37.5v-94.75c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v94.75c0 28.949 23.552 52.5 52.5 52.5h165c28.948 0 52.5-23.551 52.5-52.5v-174.5c0-20.678-16.822-37.5-37.5-37.5z"></path>
									<path d="m428.5 294.5c12.406 0 22.5-10.093 22.5-22.5v-60c0-12.407-10.094-22.5-22.5-22.5s-22.5 10.093-22.5 22.5v60c0 12.407 10.094 22.5 22.5 22.5zm-7.5-82.5c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5v60c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5z"></path>
									<path d="m83.5 264.5h165c12.406 0 22.5-10.093 22.5-22.5s-10.094-22.5-22.5-22.5h-165c-12.406 0-22.5 10.093-22.5 22.5s10.094 22.5 22.5 22.5zm57.5-15v-15h50v15zm115-7.5c0 4.136-3.364 7.5-7.5 7.5h-42.5v-15h42.5c4.136 0 7.5 3.364 7.5 7.5zm-172.5-7.5h42.5v15h-42.5c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5z"></path>
									<path d="m263.5 204.5c4.143 0 7.5-3.358 7.5-7.5v-129.5c0-4.142-3.357-7.5-7.5-7.5h-195c-4.143 0-7.5 3.358-7.5 7.5v129.5c0 4.142 3.357 7.5 7.5 7.5zm-187.5-129.5h180v114.5h-180z"></path>
								</g>
							</svg>

							<h4>Doppler</h4>
						</div>
						<div className="tile tile8">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Layer_1"
								height="512"
								viewBox="0 0 480.003 480.003"
								width="512"
							>
								<g>
									<path d="m166.01 203.6c3.746 0 7.092-2.645 7.842-6.46 11.762-59.905 10.405-124.109-4.031-190.829-.935-4.318-5.202-7.066-9.511-6.127-4.318.934-7.063 5.192-6.128 9.511 13.974 64.579 15.31 126.607 3.969 184.362-.969 4.934 2.807 9.543 7.859 9.543z"></path>
									<path d="m155.087 242.087c-18.198-8.663-32.141-20.091-41.439-33.976-15.507-23.159-12.866-44.464-22.19-73.583 15.336-16.397 22.379-38.022 20.512-59.368-.384-4.401-4.255-7.65-8.667-7.272-4.401.385-7.657 4.266-7.272 8.667 1.224 13.986-2.32 28.473-11.234 40.917-7.819-16.769-19.227-33.018-34.268-47.397-3.194-3.053-8.259-2.939-11.311.254-3.054 3.194-2.939 8.258.254 11.311 11.172 10.68 20.417 22.765 27.48 35.919 8.334 15.522 11.747 29.058 14.3 41.967-21.697 9.589-37.37 27.811-43.918 49.75-1.264 4.233 1.145 8.69 5.378 9.954 4.233 1.261 8.689-1.142 9.954-5.378 4.81-16.119 15.863-29.978 31.692-38.089 4.256 21.097 10.919 38.143 27.027 54.896-4.134 6.292-10.821 10.184-18.12 10.858-4.399.406-7.637 4.302-7.23 8.702.405 4.391 4.291 7.635 8.701 7.23 11.385-1.052 21.799-6.849 28.646-16.031 5.81 4.504 12.234 8.606 19.24 12.302-14.057 47.046-24.735 85.205-29.753 148.566-7.038-5.394-14.877-13.178-20.874-23.975-16.229-29.219-7.511-59.65-4.452-68.281 1.476-4.165-.704-8.737-4.869-10.213-4.16-1.475-8.737.704-10.212 4.868-1.796 5.066-5.228 16.484-5.87 30.976-9.03-3.4-14.962-11.195-16.753-19.93-.887-4.329-5.11-7.116-9.442-6.232-4.328.887-7.118 5.114-6.231 9.442 3.394 16.578 15.89 29.87 33.046 33.524.599 4.972 1.612 10.118 3.156 15.351-16.373 8.517-28.249 23.394-33.086 41.223-1.157 4.264 1.362 8.659 5.626 9.815 4.235 1.15 8.651-1.334 9.815-5.626 3.403-12.545 11.536-23.642 23.555-30.42 8.036 15.968 20.559 28.957 35.382 38.037-.878 17.13-1.101 34.293-.655 51.366.113 4.346 3.672 7.792 7.993 7.792 4.497 0 8.119-3.703 8.001-8.208-.856-32.82.806-65.984 4.939-98.57 6.156-48.529 14.835-77.196 27.947-121.405 1.195-4.031-.939-8.252-4.798-9.733z"></path>
									<path d="m440.934 124.293c-4.107-1.619-8.755.399-10.376 4.51-4.185 10.619-9.252 20.231-15.15 28.807-7.09-11.504-10.137-24.555-9.419-37.402.246-4.411-3.13-8.187-7.541-8.434-4.417-.249-8.188 3.13-8.434 7.542-1 17.916 3.894 36.096 14.939 51.453-24.929 27.148-44.813 26.307-69.958 40.855-12.78 7.393-24.42 17.108-34.859 29.063 3.967-13.843 7.638-27.872 10.716-43.547 11.762-59.905 10.405-124.109-4.031-190.829-.935-4.319-5.203-7.066-9.511-6.127-4.318.934-7.063 5.192-6.128 9.511 13.974 64.579 15.31 126.607 3.969 184.362-10.767 54.842-29.693 91.246-40.505 165.534-.636 4.372 2.393 8.432 6.765 9.068 4.354.637 8.43-2.378 9.069-6.765 3.737-25.68 8.479-46.725 13.55-65.73.083-.156.179-.301.253-.464 14.842-32.643 34.599-56.271 58.724-70.227 15.04-8.701 26.693-10.942 41.257-18.591-2.617 22.93 1.442 46.665 12.637 68.236 1.424 2.744 4.216 4.317 7.107 4.317 5.899 0 9.886-6.305 7.094-11.686-11.575-22.305-14.726-48.02-8.382-73.031 18.487-14.834 32.856-35.009 42.725-60.05 1.618-4.109-.4-8.755-4.511-10.375z"></path>
									<path d="m351.7 385.642c-4.822-1.728-13.491-4.244-24.364-4.903 1-7.875 4.078-15.276 8.977-21.567 2.714-3.486 2.089-8.513-1.397-11.227-3.487-2.716-8.514-2.088-11.228 1.397-7.11 9.132-11.482 20.093-12.48 31.915-25.224 3.21-46.423 17.565-59.631 37.769-1.81 1.389-3.016 3.54-3.126 5.997-.705 15.658-.855 31.535-.446 47.189.113 4.346 3.672 7.791 7.993 7.791 4.499 0 8.118-3.704 8.001-8.209-.372-14.267-.249-28.718.327-43.013 4.149-6.61 12.729-17.635 27.151-24.966 9.716 3.91 16.897 11.878 19.873 21.629 1.297 4.248 5.783 6.6 9.987 5.315 4.226-1.29 6.605-5.762 5.315-9.987-2.664-8.727-7.811-16.97-15.311-23.383 15.747-2.47 28.979 1.169 34.961 3.314 4.154 1.491 8.738-.672 10.23-4.831 1.49-4.159-.673-8.739-4.832-10.23z"></path>
									<path d="m175.796 382.207c-4.305-.991-8.6 1.695-9.591 6-.126.546-.251 1.098-.374 1.655-1.111 5.003 2.702 9.736 7.817 9.736 3.667 0 6.974-2.539 7.802-6.268.115-.516.23-1.026.347-1.532.991-4.305-1.695-8.6-6.001-9.591z"></path>
									<path d="m176.977 430.343c.099-4.417-3.401-8.078-7.818-8.177-4.4-.113-8.079 3.401-8.178 7.819-.076 3.396-.068 6.84.023 10.234.117 4.343 3.675 7.784 7.993 7.784 4.504 0 8.123-3.71 8.001-8.216-.085-3.133-.092-6.31-.021-9.444z"></path>
									<path d="m251.391 112.607c.51 4.383 4.476 7.533 8.872 7.021 4.389-.511 7.531-4.483 7.021-8.872-.112-.962-.23-1.902-.354-2.819-.589-4.378-4.604-7.451-8.995-6.863-4.379.589-7.451 4.616-6.862 8.995.111.826.217 1.672.318 2.538z"></path>
									<path d="m251.688 179.662c4.24 1.277 8.696-1.124 9.971-5.347 2.662-8.814 4.532-17.808 5.623-27.032.517-4.388-2.621-8.364-7.009-8.881-4.388-.521-8.365 2.621-8.882 7.009-.965 8.224-2.664 16.379-5.049 24.28-1.277 4.229 1.117 8.694 5.346 9.971z"></path>
								</g>
							</svg>
							<h4>Partes blandas</h4>
						</div>
					</Ecografias>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.section`
	background-image: url("https://websitedemos.net/dentist-02/wp-content/uploads/sites/493/2020/03/procedures-section-bg.jpg");
	background-size: cover;
	background-position: center;
	padding: 5rem 0.5rem;
	/* display: flex;
  justify-content: center; */
	display: grid;
	place-content: center;
	text-align: center;
	color: var(--color-text);
	/* margin-top: 5rem; */

	/* border: red solid; */

	.container {
		width: 100%;
		/* border: solid green; */
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-content: center;
		gap: 4rem;

		.item {
			/* border: solid; */
			display: grid;
			height: 100%;
		}

		.item1 {
			grid-template: 1fr / 1fr 1fr;
			gap: 3rem;

			.imageContainer {
				img {
					border-radius: 0.5rem;
					object-fit: contain;
				}
			}
			.textContainer {
				display: flex;
				flex-flow: column;
				justify-content: center;
				align-content: center;
				gap: 1rem;
				text-align: left;

				hr {
					width: 100%;
					max-width: 100px;
				}

				h2 {
					color: var(--color-primary);
				}

				@media (max-width: ${md}) {
					text-align: center;
					align-items: center;
				}
			}

			@media (max-width: ${md}) {
				grid-template: 1fr auto / 1fr;
			}
		}

		.item2 {
			text-align: center;
			background-color: var(--color-primary);
			color: white;
			padding: 1rem;
			border-radius: 0.5rem;
			gap: 1rem;
			display: flex;
			flex-flow: row wrap;
			justify-content: space-evenly;
			align-items: center;

			button {
				border: none;
				border-radius: 0.3rem;
				padding: 0.7rem;
				background-color: var(--color-fourth);
				color: white;
				transition: color 0.2s ease-in-out, background-color ease-in-out 0.2s;
				cursor: pointer;
				:hover {
					background-color: white;
					color: var(--color-primary);
				}
			}
		}

		.item3 {
			scroll-margin-top: 4rem;
			text-align: center;
			display: grid;
			place-content: center;
			place-items: center;
			gap: 2rem;

			hr {
				width: 90px;
			}

			h2 {
				color: var(--color-primary);
			}
		}

		p {
			max-width: 700px;
		}
	}
`;

const Ecografias = styled.div`
	width: 100%;
	/* min-height:200px; */
	/* padding: 1rem; */
	display: grid;
	place-content: center;
	place-items: center;
	grid-template: repeat(2, 150px) / repeat(4, minmax(120px, 150px));
	gap: 2rem 2rem;
	/* border: solid pink; */

	.tile {
		height: 100%;
		border-bottom: solid var(--color-primary) 0.2rem;
		border-radius: 0.5rem;

		display: grid;
		place-content: center;
		place-items: center;

		gap: 1rem;
		padding: 0.5rem;
		background-color: #f8f8f8;
	}

	svg {
		fill: var(--color-primary);
		max-width: 20%;
		height: auto;
	}

	@media (max-width: ${md}) {
		grid-template: repeat(1, 100px) / repeat(2, 100px);
		padding: 0.5rem;

		h4 {
			font-size: 14px;
		}
	}
`;
export default Nosotros;
